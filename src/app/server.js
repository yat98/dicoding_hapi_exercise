// /* c8 ignore next */
import 'dotenv/config';
import Hapi from '@hapi/hapi';
import apiRoutes from '../routes/api.js';

const port = process.env.PORT;
const host = process.env.HOST;

const server = Hapi.server({
  port, host,
});

server.route(apiRoutes);

// /* c8 ignore next 4 */
const start = async () => {
  await server.start();
};

const init = async () => {
  await server.initialize();
  return server;
};

export default {
  start,
  init,
};
