import express from "express";
import multer from "multer";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import mimeTypes from "mime-types";
import { sendResponse } from "../Helpers/handle_response";
import Files from "../Modules/Files";
import path from "path";
import { validateUserTokenMiddleware } from "../Middlewere/validateUserToken";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
  "/",
  validateUserTokenMiddleware,
  upload.single("file"),
  async (req, res) => {
    try {
      const { originalname, buffer } = req.file;

      const mimeType = mimeTypes.lookup(originalname);

      if (mimeType !== "text/plain") {
        return res
          .status(400)
          .send(sendResponse("Error", "File is Not supported"));
      }

      const newFileName = `${uuidv4()}.${mimeTypes.extension(mimeType)}`;
      const filePath = `uploads/${newFileName}`;

      const newFile = new Files({
        originalName: originalname,
        path: newFileName,
        id: uuidv4(),
        owner: req.user._id,
      });

      await newFile.save();
      fs.writeFileSync(filePath, buffer);

      res.status(200).json(sendResponse("Success", "Successfully updated"));
    } catch (error) {
      console.log(error);
      res.status(500).json(sendResponse("Error", "Internal Server Error"));
    }
  }
);

router.put(
  "/:fileid",
  validateUserTokenMiddleware,
  upload.single("file"),
  async (req, res) => {
    try {
      const fileName = req.params.fileid;
      const file = await Files.findOne({ id: fileName });

      if (!file) {
        return res.status(404).json({ error: "File not found" });
      }

      const { originalname, buffer } = req.file;

      const mimeType = mimeTypes.lookup(originalname);

      if (mimeType !== "text/plain") {
        return res
          .status(400)
          .send(sendResponse("Error", "File is Not supported"));
      }

      const newFileName = `${uuidv4()}.${mimeTypes.extension(mimeType)}`;
      const filePath = `uploads/${newFileName}`;

      // Mark the file as deleted
      await file.updateOne({ path: filePath, originalName: originalname });
      await file.save();

      fs.writeFileSync(newFileName, buffer);

      res.json({ message: "File updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.get("/", validateUserTokenMiddleware, async (req, res) => {
  try {
    const files = await Files.find({ owner: req.user._id });

    if (files.length < 1) {
      return res
        .status(200)
        .json({ ...sendResponse("Error", "File not found"), files: [] });
    }

    const mappedFiles = files
      .filter((i) => !i.deleted)
      .map((file) => {
        return {
          originalName: file.originalName,
          id: file.id,
        };
      });

    res.status(200).json({
      ...sendResponse("Success", "Files retrieved successfully"),
      files: mappedFiles,
    });
  } catch (error) {
    res.status(500).json(sendResponse("Error", "Internal Server Error"));
  }
});

router.get("/:id", validateUserTokenMiddleware,async (req, res) => {
  try {
const id = req.params.id

    const file = await Files.findOne({id:id});

    if (!file) {
      return res.status(404).json(sendResponse("Error", "File not found"));
    }
    console.log(file.path)
    const filePath = path.join(__dirname, "..", "..", "uploads", file.path);
   
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found in folder" });
    }
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(sendResponse("Error", "Internal Server Error"));
  }
});

router.delete("/:fileid", validateUserTokenMiddleware, async (req, res) => {
  try {
    const fileName = req.params.fileid;
    const file = await Files.findOne({ id: fileName });

    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    // Mark the file as deleted
    await file.updateOne({ deleted: true });

    // Save the changes
    await file.save();

    // Respond with success message
    res.json({ message: "File deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
