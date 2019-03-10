import mongoose from 'mongoose';

export interface User {
  name: string;
  email: string;
  password?: string;
  confirm_password?: string;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  hashed_password: {
    type: String,
    trim: true,
    required: true
  },
  salt: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
});

export const UserModel = mongoose.model('User', UserSchema);