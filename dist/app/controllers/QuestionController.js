"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Questions = require('../schemas/Questions'); var _Questions2 = _interopRequireDefault(_Questions);

class QuestionController {
  async store(req, res) {
    const { productId, userId } = req.params;
    const { question } = req.body;
    const questionSave = await _Questions2.default.create({
      productId,
      userId,
      question,
    });

    res.status(200).json(questionSave);
  }

  async index(req, res) {
    const { productId } = req.params;

    const questions = await _Questions2.default.find({
      productId: `productId:${productId}`,
    });

    return res.status(200).json(questions);
  }
}

exports. default = new QuestionController();
