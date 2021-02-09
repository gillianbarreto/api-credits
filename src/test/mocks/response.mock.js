import { DEFAULT_RESPONSE as response } from '../../app/utils/output-message';

export const responseError400 = { response: { status: 400 } };
export const responseError404 = { response: { status: 404 } };
export const responseError500 = { response: { status: 500 } };

export const message200 = (payload = {}) => {
  return { code: response.SUCCESS.code, message: response.SUCCESS.message, payload }
}
export const message404 = (payload = {}) => {
  return { code: response.NOT_FOUND.code, message: response.NOT_FOUND.message, payload }
}
export const message500 = (payload = {}) => {
  return { code: response.ERROR.code, message: response.ERROR.message, payload }
}