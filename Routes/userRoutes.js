import express from 'express';
import { validateInput } from '../Middlewares/userValidation.js';

const userRouter = express.Router();

userRouter.post('/user/register', validateInput, (req, res) => {
    res.status(201).send({message: "User registered successfully"});
})

export default userRouter;