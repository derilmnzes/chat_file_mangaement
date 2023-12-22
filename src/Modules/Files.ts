import { timeStamp } from "console";
import mongoose, { Schema, Document } from "mongoose";

export interface File extends Document {
  originalName: string;
  path: string;
  deleted:Boolean;
  id:string;
  owner:string;
}

const fileSchema: Schema<File> = new Schema({
  originalName: { type: String, required: true },
  path: { type: String, required: true },
  id:{type:String,required:true,unique:true},
  deleted:{type:Boolean,required:true,default:false},
  owner:{type:String,required:true}
},{timestamps:true});


const Files = mongoose.model<File>("File", fileSchema);

export default Files;
