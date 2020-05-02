"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const AnalyticsSchema = new _mongoose2.default.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    freteEPrazo: {
      type: Number,
      required: false,
      default: 0,
    },
    formaPagamento: {
      type: Number,
      required: false,
      default: 0,
    },
    NFEGarantia: {
      type: Number,
      required: false,
      default: 0,
    },
    originalidade: {
      type: Number,
      required: false,
      default: 0,
    },
    caracteristicasProduto: {
      type: Number,
      required: false,
      default: 0,
    },
    disponibilidade: {
      type: Number,
      required: false,
      default: 0,
    },
    SPAM: {
      type: Number,
      required: false,
      default: 0,
    },
    naoIdentificado: {
      type: Number,
      required: false,
      default: 0,
    },
    total: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose2.default.model('Analytics', AnalyticsSchema);
