import { Router } from 'express';
import EstoqueController from './app/controllers/EstoqueController';
import WatsonAssistantController from './app/controllers/WatsonAssistantController';
import NLController from './app/controllers/NLController';
import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.get(
  '/findEstoque/user/:userId/product/:productId',
  EstoqueController.show
);
routes.get(
  '/sendMessage/user/:userId/product/:productId',
  WatsonAssistantController.index
);
routes.get('/findEntity/', NLController.index);
routes.get(
  '/checkProduct/user/:userId/product/:productId',
  ProductController.show
);

export default routes;
