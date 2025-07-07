import { UserModel } from '../db/model/user';
import User from '../config/types/user';
import { sendSignUpEmail } from '../email';

export const saveUser = async (user: User) => {
  const res = await UserModel.create({ ...user });
  await sendSignUpEmail(user.email, user.registrationToken);
  return res;
};
