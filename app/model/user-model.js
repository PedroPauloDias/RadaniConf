import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
