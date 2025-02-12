import { Router } from 'express';

import { signIn, signUp, signOut } from '../controllers/auth.controller.js';

const authRouter = Router();

// -> /api/v1/auth/signup => POST Body -> {name, email, password} -> creates a new User

//Path : /api/v1/auth/signup (POST)
authRouter.post('/signup', signUp);
//Path : /api/v1/auth/signin
authRouter.post('/signin', signIn);
//Path : /api/v1/auth/signout
authRouter.post('/signout', signOut);

export default authRouter;