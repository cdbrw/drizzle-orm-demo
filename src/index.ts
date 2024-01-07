import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: false }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ message: 'Hello world!!!' });
});

app.listen(port, () =>
  console.log(`🚀 Server listening at http://localhost:${port}`)
);
