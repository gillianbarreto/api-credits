export const DEFAULT_RESPONSE = {
  SUCCESS: { code: 200,  message: 'Success' },
  NOT_FOUND: { code: 404, message: 'Not Found' },
  ERROR: { code: 500,  message: 'Internal Error' }
};

export const outputMessage = (code, message, payload) => ({
  code,
  message,
  payload
});

export const success = (payload, message = DEFAULT_RESPONSE.SUCCESS.message) => {
  return outputMessage(DEFAULT_RESPONSE.SUCCESS.code, message, payload);
}

export const notFound = (payload = null, message = DEFAULT_RESPONSE.NOT_FOUND.message) => {
  return outputMessage(DEFAULT_RESPONSE.NOT_FOUND.code, message, payload);
}

export const internalError = (error) => {
  return outputMessage(DEFAULT_RESPONSE.ERROR.code, DEFAULT_RESPONSE.ERROR.message, error);
}
