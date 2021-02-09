import app from '../../server/index';
import { creditBody } from '../mocks/data.mock';

const request = require('supertest');

describe('Manage Credits', () => {

  const route = '/api/v1/credits';

  it('Manage Credits - return 200', async (done) => {
    request(app)
      .post(route)
      .send(creditBody)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    done();
  });

  it('Manage Credits - return 400', async (done) => {
    request(app)
      .post(route)
      .send('sinbody')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
    done();
  });

});