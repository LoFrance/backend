import { Router, Request, Response } from "express";

const userRouter =  Router();

userRouter.post('/api/users', (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).json({ message: `Success!` });
})

export default userRouter;