import { Router } from 'express';
import EstoqueController from './app/controllers/EstoqueController';
import WatsonAssistantController from './app/controllers/WatsonAssistantController';
import NLController from './app/controllers/NLController';

const routes = new Router();

routes.get('/findEstoque', EstoqueController.show);
routes.get('/sendMessage/:productId', WatsonAssistantController.index);
routes.get('/findEntity/', NLController.index);

export default routes;
