import express from 'express';
import userRouter from './Routes/userRoutes.js';
import { errorHandler } from './Middlewares/errorHandler.js';


const Port = 2000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', userRouter);

app.use(errorHandler);


app.listen(Port, () => {
    console.log(`Server has started at ${Port}`);
});
