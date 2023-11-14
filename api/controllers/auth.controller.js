import User from "../model/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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
export const SignIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validateUser = await User.findOne({ email });
    if (!validateUser) {
      return next(errorHandler(404, "Invalid email or password"));
    }
    const validPassword = bcryptjs.compareSync(password, validateUser.password);
    if (!validPassword) {
      return next(errorHandler(404, "Invalid email or password"));
    }
    const token = jwt.sign({ id: validateUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validateUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
