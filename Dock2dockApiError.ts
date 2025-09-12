export class Dock2dockApiError {
  message: string;
  statusCode: number;
  code: string;

  constructor(message: string, statusCode: number, code: string) {
    this.message = message;
    this.statusCode = statusCode;
    this.code = code;
  }
}