"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _EstoqueController = require('./app/controllers/EstoqueController'); var _EstoqueController2 = _interopRequireDefault(_EstoqueController);
var _WatsonAssistantController = require('./app/controllers/WatsonAssistantController'); var _WatsonAssistantController2 = _interopRequireDefault(_WatsonAssistantController);
var _NLController = require('./app/controllers/NLController'); var _NLController2 = _interopRequireDefault(_NLController);
var _ProductController = require('./app/controllers/ProductController'); var _ProductController2 = _interopRequireDefault(_ProductController);

const routes = new (0, _express.Router)();

routes.get(
  '/findEstoque/user/:userId/product/:productId',
  _EstoqueController2.default.show
);
routes.get(
  '/sendMessage/user/:userId/product/:productId',
  _WatsonAssistantController2.default.index
);
routes.get('/findEntity/', _NLController2.default.index);
routes.get(
  '/checkProduct/user/:userId/product/:productId/atributos/:atributos',
  _ProductController2.default.show
);

exports. default = routes;
