import { Router, Response } from 'express';

const healthRouter = Router();

healthRouter.get('/health', (_, res: Response) => {
  res.status(200).json({ status: 'API is running successfully!' });
});

export default healthRouter;
