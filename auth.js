import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "@/data/users";
import  User from "@/app/model/user-model"
import  bcrypt  from 'bcryptjs';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (!credentials) return null;
        try {
        

          const user = await getUserByEmail(credentials?.email); 
    
          
          // const user = await User.findOne({
          //   email: credentials?.email
          // });

        
          

          if (user) {
            const isMatch = await bcrypt.compare(
                credentials?.password,
                user?.password
            );
            if (isMatch) {
              return { ...user, role: user?.role };
            } else {
              throw new Error("invalid password");
            }
          } else {
            throw new Error("user not found");
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          role: "user", 
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.email = token.email;

      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
  },
});
