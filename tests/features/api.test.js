/* eslint-disable no-undef */
import server from '../../src/app/server';

let srv;

beforeEach(async () => {
  srv = await server.init();
});

afterEach(async () => {
  await srv.stop();
});

describe('ANY /anyroute', () => {
  it('should return not found', async () => {
    const response = await srv.inject({
      method: 'PUT',
      url: '/anyroute',
    });
    expect(response.payload).toBe('Not Found');
  });
});
