import { UserModel, User } from "../models/user.model";

export const signUp = (user: User): Promise<User> => {
  return new UserModel(user).save();
}