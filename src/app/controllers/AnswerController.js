import mongoose from 'mongoose';
import Questions from '../schemas/Questions';

class AnswerController {
  async checkQuestion(req, res) {
    const { productId } = req.params;
    const { input } = req.body;

    const question = await Questions.findOne({
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

    const question = await Questions.findOne({
      _id: mongoose.Types.ObjectId(questionId),
    });

    if (question) {
      await question.update({
        answer,
      });
    }

    return res.status(200).json(question);
  }
}

export default new AnswerController();
