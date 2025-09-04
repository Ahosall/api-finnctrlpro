import { HttpBaseError } from "./HttpBaseError";

export class BadRequestError extends HttpBaseError {
  constructor(message = "bad request") {
    super(message, 400);
  }
}
