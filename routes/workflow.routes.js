import { Router } from 'express';
import { sendReminders } from '../controllers/workflow.controller.js';

const workflowRouter = Router();

//workflowRouter.get('/', (req, res) => res.send({ title: 'Get all workflows' }));
workflowRouter.post('/subscription/reminder', sendReminders);

export default workflowRouter;
