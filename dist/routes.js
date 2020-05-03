"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _EstoqueController = require('./app/controllers/EstoqueController'); var _EstoqueController2 = _interopRequireDefault(_EstoqueController);
var _WatsonAssistantController = require('./app/controllers/WatsonAssistantController'); var _WatsonAssistantController2 = _interopRequireDefault(_WatsonAssistantController);
var _ProductController = require('./app/controllers/ProductController'); var _ProductController2 = _interopRequireDefault(_ProductController);
var _AnalyticsController = require('./app/controllers/AnalyticsController'); var _AnalyticsController2 = _interopRequireDefault(_AnalyticsController);
var _QuestionController = require('./app/controllers/QuestionController'); var _QuestionController2 = _interopRequireDefault(_QuestionController);
var _AnswerController = require('./app/controllers/AnswerController'); var _AnswerController2 = _interopRequireDefault(_AnswerController);

const routes = new (0, _express.Router)();

routes.get(
  '/findEstoque/user/:userId/product/:productId',
  _EstoqueController2.default.show
);
routes.get(
  '/sendMessage/user/:userId/product/:productId',
  _WatsonAssistantController2.default.index
);
routes.get(
  '/checkProduct/user/:userId/product/:productId/atributos/:atributos',
  _ProductController2.default.show
);
routes.post(
  '/storeAnalytics/user/:userId/product/:productId/atributos/:atributos',
  _AnalyticsController2.default.store
);

routes.get(
  '/storeAnalytics/user/:userId/product/:productId',
  _AnalyticsController2.default.index
);

routes.post('/storeProduct', _ProductController2.default.store);

routes.post(
  '/storeQuestion/user/:userId/product/:productId',
  _QuestionController2.default.store
);

routes.get(
  '/storeQuestion/product/:productId/question/:input',
  _AnswerController2.default.show
);

exports. default = routes;
