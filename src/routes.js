import { Router } from 'express';
import EstoqueController from './app/controllers/EstoqueController';
import WatsonAssistantController from './app/controllers/WatsonAssistantController';
import ProductController from './app/controllers/ProductController';
import AnalyticsController from './app/controllers/AnalyticsController';
import QuestionController from './app/controllers/QuestionController';
import AnswerController from './app/controllers/AnswerController';

const routes = new Router();

/* Rotas simulando o marketplace */

// Salva uma pergunta no banco
routes.post(
  '/storeQuestion/user/:userId/product/:productId',
  QuestionController.store
);

// Lista todas as questoes baseadas no id do produto
routes.get('/getQuestions/product/:productId', QuestionController.index);

/* Rotas que a Olist acessaria */

// Envia uma pergunta para ser analisada pelo sistema
// Verifica se ja tem uma resposta automatica para ela
routes.post(
  '/sendMessage/user/:userId/product/:productId',
  WatsonAssistantController.store
);

// Rota para responder uma pergunta
routes.post(
  '/answerQuestion/product/:productId/question/:questionId',
  AnswerController.store
);

// Exibe os dados das perguntas mais efetuadas
// (ex: perguntas sobre formas de pagamento, envio de nota fiscal, etc)
routes.get(
  '/storeAnalytics/user/:userId/product/:productId',
  AnalyticsController.index
);

/* Rotas internas do sistema  */

// Busca a disponibilidade no estoque baseado no id do produto
routes.get(
  '/findEstoque/user/:userId/product/:productId',
  EstoqueController.show
);

// Verifica os atributos do produto (ex: cor, tamanho, bateria)
// Verifica se o atributo procurado esta na lista de atributos do produto
routes.get(
  '/checkProduct/user/:userId/product/:productId/atributos/:atributos',
  ProductController.show
);

// Salva os tipos de perguntas para gerar um relatorio com as perguntas mais
// efetuadas. (ex: perguntas sobre formas de pagamento, envio de nota fiscal, etc)
routes.post(
  '/storeAnalytics/user/:userId/product/:productId/atributos/:atributos',
  AnalyticsController.store
);

// Verifica se ja tem uma questao parecida salva no banco
routes.post(
  '/checkQuestion/product/:productId',
  AnswerController.checkQuestion
);

/* Rota para testes do hackathon(ignorar) */

// Salva um produto (Rota apenas para testes do hackathon)
routes.post('/storeProduct', ProductController.store);

export default routes;
