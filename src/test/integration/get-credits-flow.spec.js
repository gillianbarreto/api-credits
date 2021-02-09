import app from '../../server/index';

const request = require('supertest');

describe('Get Credits', () => {

  const route = '/api/v1/credits';
  const email = 'pedro@lopez.cl';

  it('Routes not found - return 404', async (done) => {
    request(app)
      .post(`${route}noexiste`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
    done();
  });

  it('Credits by user - return 200', async (done) => {
    request(app)
      .get(`${route}/${email}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    done();
  });

  it('Credits by user - return 400', async (done) => {
    request(app)
      .get(`${route}/noesunemail`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
    done();
  });

  it('Credits by user and store - return 200', async (done) => {
    request(app)
      .get(`${route}/${email}/A`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    done();
  });

});