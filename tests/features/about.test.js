/* eslint-disable no-undef */
import server from '../../src/app/server';

let srv;

beforeEach(async () => {
  srv = await server.init();
});

afterEach(async () => {
  await srv.stop();
});

describe('GET /about', () => {
  it('should success get page', async () => {
    const response = await srv.inject({
      method: 'GET',
      url: '/about',
    });
    expect(response.statusCode).toBe(200);
  });
});

describe('ANY /about', () => {
  it('should return not found', async () => {
    const response = await srv.inject({
      method: 'PUT',
      url: '/about',
    });
    expect(response.payload).toBe('Not Found');
  });
});
