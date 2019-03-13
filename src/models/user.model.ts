import { Schema, Document } from 'mongoose';

import mongoose from 'mongoose';
import crypto from 'crypto';
import uuid from 'uuid/v1';

export interface User extends Document {
  name: string;
  email: string;
  password?: string;
  confirm_password?: string;
}

const UserSchema = new Schema({
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

UserSchema.virtual('password')
  .set(function (this: any, password: string) {
    this._password = password;
    this.salt = uuid();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function(this: any) {
    return this._password;
  });

UserSchema.methods.encryptPassword = function (password: string) {
  try {
		return crypto.createHmac('sha256', this.salt).update(password).digest('hex');
  } catch (error) {
    return "";
  }
}

export const UserModel = mongoose.model<User>('User', UserSchema);