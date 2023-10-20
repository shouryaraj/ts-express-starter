import express, { Request, Response } from 'express';
import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const app = express();
const port = 3000;

app.get('/health', (req: Request, res: Response) => {
  res.send('Hello, Express app is healthy!');
});

app.get('/environment', (req: Request, res: Response) => {
  res.send(`My environment is ${process.env.TESTING_ENV}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
