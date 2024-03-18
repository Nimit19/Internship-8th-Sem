const ERROR_MESSAGES = {
  _NotFound(str: string) {
    return `${str} not found`;
  },
  _InternalServerError() {
    return `Internal Server Error`;
  },
  _BadRequest() {
    return `Could not understand the request because of invalid syntax`;
  },
  _Unauthorized(str: string) {
    return `You are not astringuthorized to ${str}`;
  },
  _Conflict(str: string) {
    return `${str} already exists`;
  },
};

const STATUS_CODE = {
  SUCEES_STATUS_CODE: 200,
  CREATED_STATUS_CODE: 201,
  BAD_REQUEST_STATUS_CODE: 400,
  UNAUTORIZED_STATUS_CODE: 401,
  NOT_FOUND_STATUS_CODE: 404,
  CONFILCT_STATUS_CODE: 409,
  INTERNAL_SERVER_ERROR_STATUS_CODE: 500,
};
