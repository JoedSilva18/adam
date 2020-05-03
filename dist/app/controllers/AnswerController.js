"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _Questions = require('../schemas/Questions'); var _Questions2 = _interopRequireDefault(_Questions);

class AnswerController {
  async checkQuestion(req, res) {
    const { productId } = req.params;
    const { input } = req.body;

    const question = await _Questions2.default.findOne({
      productId,
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

  async store(req, res) {
    const { questionId, productId } = req.params;
    const { answer } = req.body;

    const question = await _Questions2.default.findOne({
      _id: _mongoose2.default.Types.ObjectId(questionId),
    });

    if (question) {
      await question.update({
        answer,
      });
    }

    return res.status(200).json(question);
  }
}

exports. default = new AnswerController();
