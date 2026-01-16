import { Router, Request, Response } from 'express';
import { saveUser } from './service';
import { assertIsEmail } from '../lib/email';

const userRouter = Router();

userRouter.post('/api/users', async (req: Request, res: Response) => {
  console.log('Request incoming...', req.body);
  try {
    if (!req.body) {
      console.log('Bad request, body is empty');
      res.status(400).json({ message: 'Failure: body with email is required' });
      return;
    }
    const email = req.body.email;

    if (!email || !assertIsEmail(email)) {
      console.log('Bad request, email is not provided or not valid!');
      res.status(400).json({ message: 'Failure: field email is required or is not a valid email' });
      return;
    }
    const name = email.split('@')[0];

    const queryResult = await saveUser({
      email: email,
      name: name,
      handle: name,
      registrationToken: crypto.randomUUID(),
    });
    res.status(200).json({ message: `Success: ${queryResult}` });
    return;
  } catch (e) {
    console.log('Ops, we have a serious problem!');
    res.status(500).json({ message: `Failure: internal server error ${e}` });
    return;
  }
});

export default userRouter;
