"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Questions = require('../schemas/Questions'); var _Questions2 = _interopRequireDefault(_Questions);

class AnswerController {
  async show(req, res) {
    const { productId, input } = req.params;

    const question = await _Questions2.default.findOne({
      productId: `productId:${productId}`,
      question: input,
    });

    if (question) {
      return res.status(200).json({
        result: question.answer,
      });
    }

    return res.status(200).json({
      result: '',
    });
  }
}

exports. default = new AnswerController();
