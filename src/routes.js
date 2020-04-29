import { Router } from 'express';
import ColorController from './app/controllers/ColorController';
import EstoqueController from './app/controllers/EstoqueController';
import PrazoEntregaController from './app/controllers/PrazoEntregaController';

const routes = new Router();

routes.get('/findColor', ColorController.index);
routes.get('/findEstoque', EstoqueController.index);
routes.get('/checkPrazoEntrega', PrazoEntregaController.index);

export default routes;
