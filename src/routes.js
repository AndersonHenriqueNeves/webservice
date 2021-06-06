import { Router } from 'express';
import ContatoController from './app/controllers/ContatoController';

const routes = new Router();

routes.post('/contato', ContatoController.store);
routes.get('/contato', ContatoController.index);
routes.put('/contato/:id', ContatoController.update);
routes.delete('/contato/:id', ContatoController.delete);
export default routes;