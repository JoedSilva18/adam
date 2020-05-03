import Questions from '../schemas/Questions';

class QuestionController {
  async store(req, res) {
    const question = await Questions.create(req.body);

    res.status(200).json(question);
  }

  async index(req, res) {
    const questions = await Questions.find();

    return res.status(200).json(questions);
  }
}

export default new QuestionController();
