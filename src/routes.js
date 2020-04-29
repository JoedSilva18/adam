import { Router } from 'express';
import ColorController from './app/controllers/ColorController';

const routes = new Router();

routes.get('/findColor', ColorController.index);

export default routes;
