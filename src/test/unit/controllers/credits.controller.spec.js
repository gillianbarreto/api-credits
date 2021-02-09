import { createRequest, createResponse } from 'node-mocks-http'
import * as controller from '../../../app/controllers/v1/credits.controller';
import * as module from '../../../app/modules/v1/credits.module';
import { message200 } from '../../mocks/response.mock';

jest.mock('../../../app/modules/v1/credits.module');

let req = createRequest();
let res = createResponse();

describe('CreditsController', () => {

  it('creditsByUserController, obtiene 200', async () => {
    module.creditsByUserModule.mockResolvedValue(message200());
    await controller.creditsByUserController(req, res);
    expect(res.statusCode).toEqual(200);
  });

  it('creditsByUserAndStoreController, obtiene 200', async () => {
    module.creditsByUserAndStoreModule.mockResolvedValue(message200());
    await controller.creditsByUserAndStoreController(req, res);
    expect(res.statusCode).toEqual(200);
  });

  it('manageCreditsController, obtiene 200', async () => {
    module.manageCreditsModule.mockResolvedValue(message200());
    await controller.manageCreditsController(req, res);
    expect(res.statusCode).toEqual(200);
  });

});