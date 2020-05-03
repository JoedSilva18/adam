import { Router } from 'express';
import EstoqueController from './app/controllers/EstoqueController';
import WatsonAssistantController from './app/controllers/WatsonAssistantController';
import ProductController from './app/controllers/ProductController';
import AnalyticsController from './app/controllers/AnalyticsController';
import QuestionController from './app/controllers/QuestionController';
import AnswerController from './app/controllers/AnswerController';

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

routes.post('/storeProduct', ProductController.store);

routes.post(
  '/storeQuestion/user/:userId/product/:productId',
  QuestionController.store
);

routes.get('/getQuestions/product/:productId', QuestionController.index);

routes.post(
  '/checkQuestion/product/:productId',
  AnswerController.checkQuestion
);

export default routes;
