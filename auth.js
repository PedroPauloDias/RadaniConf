import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/users";

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
          // Verifique se é um login de visitante
          if (
            credentials.email === "visitante@example.com" &&
            credentials.password === "visitante123"
          ) {
            return {
              email: "visitante@example.com",
              role: "visitante",
              id: "visitante",
            };
          }

          const user = getUserByEmail(credentials?.email);
          if (user) {
            const isMatch = user?.password === credentials?.password;
            if (isMatch) {
              return { ...user, role: user?.role, trabalho: user?.trabalho };
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
          role: "user", // Define um valor padrão para `role`
          // Adicione outros campos necessários, se houver
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
});
