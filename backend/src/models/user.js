import Mongoose from 'mongoose';
import validator from 'validator';

const { Schema, model } = Mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
          throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot contain "password"')
      }
    }
  },
  name: { type: String, required: true, trim: true },
  address: { type: String },
  marital_status: { type: String },
  phone_number: { type: String },
  thumbnail: { data: Buffer, contentType: String },
  posted_room_ids: [ { type: String } ],
  room_applicant_ids: [ { } ],
  interested_room_ids: [ { type: String } ],
})

const User = new model('user', userSchema);

export default User;