"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _ColorController = require('./app/controllers/ColorController'); var _ColorController2 = _interopRequireDefault(_ColorController);

const routes = new (0, _express.Router)();

routes.get('/findColor', _ColorController2.default.index);

exports. default = routes;
