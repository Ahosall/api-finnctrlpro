import { HttpBaseError } from "./HttpBaseError";

export class ConflictError extends HttpBaseError {
  constructor(message = "conflict") {
    super(message, 409);
  }
}
