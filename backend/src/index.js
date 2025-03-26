import express from 'express';
import cors from 'cors';
import userRouter from '../routes/user.routes.js';
import syncDatabase from '../model/syncDB.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

syncDatabase();

app.use('/api/user', userRouter);


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});