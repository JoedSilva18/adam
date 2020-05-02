import { Router } from 'express';
import EstoqueController from './app/controllers/EstoqueController';
import WatsonAssistantController from './app/controllers/WatsonAssistantController';
import ProductController from './app/controllers/ProductController';
import AnalyticsController from './app/controllers/AnalyticsController';

const routes = new Router();

routes.get(
  '/findEstoque/user/:userId/product/:productId',
  EstoqueController.show
);
routes.get(
  '/sendMessage/user/:userId/product/:productId',
  WatsonAssistantController.index
);
routes.get(
  '/checkProduct/user/:userId/product/:productId/atributos/:atributos',
  ProductController.show
);
routes.post(
  '/storeAnalytics/user/:userId/product/:productId/atributos/:atributos',
  AnalyticsController.store
);

routes.get(
  '/storeAnalytics/user/:userId/product/:productId',
  AnalyticsController.index
);

export default routes;
