"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const QuestionsSchema = new _mongoose2.default.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: false,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

exports. default = _mongoose2.default.model('Question', QuestionsSchema);
