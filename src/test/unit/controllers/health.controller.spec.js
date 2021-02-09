'use strict';

import { createRequest, createResponse } from 'node-mocks-http'
import { healthcheckController } from '../../../app/controllers/healthcheck.controller';

describe('HealthCheck Controller', () => {

  it('HealthCheckController retorna OK', async () => {
    let req = createRequest();
    let res = createResponse();

    healthcheckController(req, res);
    expect(res.statusCode).toBe(200);
  });
});