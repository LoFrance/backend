import { UserModel } from '../db/model/user'
import User from '../utils/types/user';

export const saveUser = async (user: User) => {
  await UserModel.create({...user});
}