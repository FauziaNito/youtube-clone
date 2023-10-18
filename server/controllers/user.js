import { createError } from '../error.js';
import User from '../models/User.js';

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      }, {new: true});
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, 'You can only update your account!'));
  }
};
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
          await User.findByIdAndDelete(req.params.id)
          res.status(200).json("User has been deleted");
        } catch (error) {
          next(error);
        }
      } else {
        return next(createError(403, 'You can only delete your account!'));
      }
};
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
};
export const subcribe = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
};
export const unsubcribe = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
};
export const like = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
};
export const dislike = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
};
