"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _EstoqueController = require('./app/controllers/EstoqueController'); var _EstoqueController2 = _interopRequireDefault(_EstoqueController);
var _WatsonAssistantController = require('./app/controllers/WatsonAssistantController'); var _WatsonAssistantController2 = _interopRequireDefault(_WatsonAssistantController);
var _ProductController = require('./app/controllers/ProductController'); var _ProductController2 = _interopRequireDefault(_ProductController);
var _AnalyticsController = require('./app/controllers/AnalyticsController'); var _AnalyticsController2 = _interopRequireDefault(_AnalyticsController);
var _QuestionController = require('./app/controllers/QuestionController'); var _QuestionController2 = _interopRequireDefault(_QuestionController);
var _AnswerController = require('./app/controllers/AnswerController'); var _AnswerController2 = _interopRequireDefault(_AnswerController);

const routes = new (0, _express.Router)();

/* Rotas simulando o marketplace */

// Salva uma pergunta no banco
routes.post(
  '/storeQuestion/user/:userId/product/:productId',
  _QuestionController2.default.store
);

// Lista todas as questoes baseadas no id do produto
routes.get('/getQuestions/product/:productId', _QuestionController2.default.index);

/* Rotas que a Olist acessaria */

// Envia uma pergunta para ser analisada pelo sistema
// Verifica se ja tem uma resposta automatica para ela
routes.post(
  '/sendMessage/user/:userId/product/:productId',
  _WatsonAssistantController2.default.store
);

// Rota para responder uma pergunta
routes.post(
  '/answerQuestion/product/:productId/question/:questionId',
  _AnswerController2.default.store
);

// Exibe os dados das perguntas mais efetuadas
// (ex: perguntas sobre formas de pagamento, envio de nota fiscal, etc)
routes.get(
  '/getAnalytics/user/:userId/product/:productId',
  _AnalyticsController2.default.index
);

/* Rotas internas do sistema  */

// Busca a disponibilidade no estoque baseado no id do produto
routes.get(
  '/findEstoque/user/:userId/product/:productId',
  _EstoqueController2.default.show
);

// Verifica os atributos do produto (ex: cor, tamanho, bateria)
// Verifica se o atributo procurado esta na lista de atributos do produto
routes.get(
  '/checkProduct/user/:userId/product/:productId/atributos/:atributos',
  _ProductController2.default.show
);

// Salva os tipos de perguntas para gerar um relatorio com as perguntas mais
// efetuadas. (ex: perguntas sobre formas de pagamento, envio de nota fiscal, etc)
routes.post(
  '/storeAnalytics/user/:userId/product/:productId/atributos/:atributos',
  _AnalyticsController2.default.store
);

// Verifica se ja tem uma questao parecida salva no banco
routes.post(
  '/checkQuestion/product/:productId',
  _AnswerController2.default.checkQuestion
);

/* Rota para testes do hackathon(ignorar) */

// Salva um produto (Rota apenas para testes do hackathon)
routes.post('/storeProduct', _ProductController2.default.store);

exports. default = routes;
