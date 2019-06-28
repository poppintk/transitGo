/* eslint-disable global-require */
/* eslint-disable no-undef */
const request = require('supertest');

let server;

describe('/api/transit', () => {
  beforeEach(() => {
    server = require('../../index');
  });
  afterEach(async () => {
    await server.close();
  });

  describe('GET /agencies', () => {
    it('should return all genres', async () => {
      const res = await request(server).post('/api/transit/agencies');
      expect(res.status).toBe(200);
    });
  });
});
