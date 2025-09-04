import { HttpBaseError } from "./HttpBaseError";

export class UnauthorizedError extends HttpBaseError {
  constructor(message = "unauthorized") {
    super(message, 401);
  }
}
