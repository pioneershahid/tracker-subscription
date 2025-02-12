import { Router } from 'express';
import { getUsers, getUser } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

//userRouter.get('/', (req, res) => res.send({ title: 'Get all users' }));
userRouter.get('/', getUsers);
//userRouter.get('/:id', (req, res) => res.send({ title: 'Get user details' }));
//userRouter.get('/:id', getUser);
userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res) => res.send({ title: 'Create user' }));
userRouter.put('/:id', (req, res) => res.send({ title: 'Update user' }));
userRouter.delete('/:id', (req, res) => res.send({ title: 'Delete user' }));

export default userRouter;
