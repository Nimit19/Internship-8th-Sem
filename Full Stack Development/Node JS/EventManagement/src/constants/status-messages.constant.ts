export const SUCCESS_MESSAGES = {
  _SuccessOk: () => "The request succeeded",
  _Created: (str: string) => `${str} was created successfully`,
};

export const ERROR_MESSAGES = {
  _BadRequest: () =>
    "Could not understand the request because of invalid syntax",
  _Unauthorized: (str: string) => `You are not authorized to ${str}`,
  _NotFound: (str: string) => `${str} not found`,
  _Conflict: (str: string) => `${str} already exists`,
  _InternalServerError: () => "Internal Server Error",
};
