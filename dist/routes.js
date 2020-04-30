"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _ColorController = require('./app/controllers/ColorController'); var _ColorController2 = _interopRequireDefault(_ColorController);
var _EstoqueController = require('./app/controllers/EstoqueController'); var _EstoqueController2 = _interopRequireDefault(_EstoqueController);
var _PrazoEntregaController = require('./app/controllers/PrazoEntregaController'); var _PrazoEntregaController2 = _interopRequireDefault(_PrazoEntregaController);
var _WatsonAssistantController = require('./app/controllers/WatsonAssistantController'); var _WatsonAssistantController2 = _interopRequireDefault(_WatsonAssistantController);

const routes = new (0, _express.Router)();

routes.get('/findColor', _ColorController2.default.index);
routes.get('/findEstoque', _EstoqueController2.default.index);
routes.get('/checkPrazoEntrega', _PrazoEntregaController2.default.index);
routes.get('/sendMessage/:productId', _WatsonAssistantController2.default.index);

exports. default = routes;
