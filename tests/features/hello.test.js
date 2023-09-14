/* eslint-disable no-undef */
import server from '../../src/app/server';

let srv;

beforeEach(async () => {
  srv = await server.init();
});

afterEach(async () => {
  await srv.stop();
});

describe('GET /hello/{username}', () => {
  it('should success get page', async () => {
    const response = await srv.inject({
      method: 'GET',
      url: '/hello/hidayat',
    });
    expect(response.payload).toBe('Hello, hidayat!');
  });

  it('should return "Hello, stranger!" when username param is empty', async () => {
    const response = await srv.inject({
      method: 'GET',
      url: '/hello',
    });
    expect(response.payload).toBe('Hello, stranger!');
  });

  it('should return "Hai, " when query lang is id', async () => {
    const response = await srv.inject({
      method: 'GET',
      url: '/hello/hidayat?lang=id',
    });
    expect(response.payload).toBe('Hai, hidayat!');
  });

  it('should return "Hai, stranger!" when username param is empty and lang is id', async () => {
    const response = await srv.inject({
      method: 'GET',
      url: '/hello?lang=id',
    });
    expect(response.payload).toBe('Hai, stranger!');
  });
});
