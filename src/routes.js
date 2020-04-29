import { Router } from 'express';
import ColorController from './app/controllers/ColorController';
import EstoqueController from './app/controllers/EstoqueController';

const routes = new Router();

routes.get('/findColor', ColorController.index);
routes.get('/findEstoque', EstoqueController.index);

export default routes;
