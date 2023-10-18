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
export const deleteUser = (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};
export const getUser = (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};
export const subcribe = (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};
export const unsubcribe = (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};
export const like = (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};
export const dislike = (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};
