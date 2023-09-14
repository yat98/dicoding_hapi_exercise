import indexController from '../controllers/index.js';
import aboutController from '../controllers/about.js';
import helloController from '../controllers/hello.js';

const apiRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: indexController.index,
  },
  {
    method: '*',
    path: '/',
    handler: indexController.notFound,
  },
  {
    method: 'GET',
    path: '/about',
    handler: aboutController.index,
  },
  {
    method: '*',
    path: '/about',
    handler: aboutController.notFound,
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: helloController.hello,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Not Found',
  },
];

export default apiRoutes;
