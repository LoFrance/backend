import { Router, Request, Response } from 'express';
import { saveUser } from './service';

const userRouter = Router();

userRouter.post('/api/users', async (req: Request, res: Response) => {
  console.log(req.body);
  const email = req.body.email;
  const name = email.split('@')[0];
  const queryResult = await saveUser({
    email: email,
    name: name,
    handle: name,
  });
  res.status(200).json({ message: `Success: ${queryResult}` });
});

export default userRouter;
