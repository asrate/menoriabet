import User from "../model/User.model.js";
import bcryptjs from "bcryptjs";

export const Signup = async (req, res, next) => {
  // console.log(req.body);
  const { username, password, email } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  //console.log(usernam);
  const newUser = await User({
    username,
    password: hashPassword,
    email,
  });
  try {
    await newUser.save();
    res.status(200).json("success");
  } catch (error) {
    next(error);
  }
};
