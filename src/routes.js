import { Router } from 'express';
import ColorController from './app/controllers/ColorController';
import EstoqueController from './app/controllers/EstoqueController';
import PrazoEntregaController from './app/controllers/PrazoEntregaController';
import WatsonAssistantController from './app/controllers/WatsonAssistantController';

const routes = new Router();

routes.get('/findColor', ColorController.index);
routes.get('/findEstoque', EstoqueController.index);
routes.get('/checkPrazoEntrega', PrazoEntregaController.index);
routes.get('/sendMessage/:productId', WatsonAssistantController.index);

export default routes;
