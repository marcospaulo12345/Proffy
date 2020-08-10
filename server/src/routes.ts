import express from 'express'
import db from './database/connection';
import convertHourToMinute from './utils/convertHourToMinute';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import AuthController from './controllers/AuthController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();
const authController = new AuthController();


routes.post('/register', authController.register);
routes.post('/authenticate', authController.authenticate);

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes;