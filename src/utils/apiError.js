class ApiError {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
  }
  static badRequest(message) {
    return new ApiError(400, message);
  }

  static unAuthorizedRequest(message) {
    return new ApiError(401, message);
  }

  static forbiddenRequest(message) {
    return new ApiError(403, message);
  }

  static notFound(message) {
    return new ApiError(404, message);
  }

  static conflict(message) {
    return new ApiError(409, message);
  }

  static unProcessableEntity(message) {
    return new ApiError(422, message);
  }

  static internalServer(message) {
    return new ApiError(500, message);
  }
}

module.exports = ApiError;
