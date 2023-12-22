export const validateUserInput = (
  name: string | undefined,
  password: string | undefined
): { isValid: boolean; errorMessage?: string } => {
  if (
    !name ||
    !password ||
    typeof name !== "string" ||
    typeof password !== "string"
  ) {
    return { isValid: false, errorMessage: "Please fill all the fields" };
  }

  if (password.length < 8) {
    return {
      isValid: false,
      errorMessage: "Password must be at least 8 characters long",
    };
  }

  return { isValid: true };
};
