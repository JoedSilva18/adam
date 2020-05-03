"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Questions = require('../schemas/Questions'); var _Questions2 = _interopRequireDefault(_Questions);

class QuestionController {
  async store(req, res) {
    const question = await _Questions2.default.create(req.body);

    res.status(200).json(question);
  }

  async index(req, res) {
    const questions = await _Questions2.default.find();

    return res.status(200).json(questions);
  }
}

exports. default = new QuestionController();
