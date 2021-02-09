import { createRequest, createResponse } from 'node-mocks-http';
import { validate } from '../../../app/middlewares/request.validator';

describe('Request Validator', () => {
  let req;
  let res;

  beforeEach(() => {
    res = createResponse();
  });

  it('validate method without errors - return next', () => {
    req = createRequest();
    const next = jest.fn();
    validate(req, res, next);
    expect(next).toBeCalled();
  });

});