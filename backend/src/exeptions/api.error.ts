export class ApiError extends Error {
  status: number;
  errors?: Record<string, string[]>;

  constructor({
    message,
    status,
    errors = {},
  }: {
    message: string;
    status: number;
    errors?: Record<string, string[]>;
  }) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static badRequest(
    message: string,
    errors?: Record<string, string[]>,
  ): ApiError {
    return new ApiError({ message, status: 400, errors });
  }

  static unauthorized(message = 'Unauthorized'): ApiError {
    return new ApiError({ message, status: 401 });
  }

  static forbidden(message = 'Forbidden'): ApiError {
    return new ApiError({ message, status: 403 });
  }

  static notFound(message = 'Not Found'): ApiError {
    return new ApiError({ message, status: 404 });
  }
}
