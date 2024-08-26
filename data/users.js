import { dbConnect } from '@/app/lib/mongo';
import  User from '@/app/model/user-model';

export const getUserByEmail = async (email) => {
  await dbConnect();
  console.log('Getting user by email:', email);

  const user = await User.findOne({
    email: email // Use `email` directly
  });

  console.log('User',user)
  return user;
};


export const getSession = async (req) => {
  const session = await getSession({ req });
  if (session?.user) {
    const user = getUserByEmail(session.user.email);
    if (user) {
      session.user.role = user.role;
    }
  }
  return session;
};