import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      /*async authorize(credentials, req) {
        const user = {
          add function to get user 
        };
        return user;
      },*/
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "arcobaleno262@gmail",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: (credentials, req) => {
        //database look up #TODO
        const user = { id: "2", name: "alex", email: "arcobaleno262@gmail" };
        if (user) {
          return {
            user,
          };
        } else {
          //login fail #TODO
          return null;
        }
      },
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],

  /*pages: {
    signIn: "/auth/signin",
  },*/
  session: { strategy: "jwt" },
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.id = token.id;
      }
      console.log({ session, token, user });
      return session;
    },
    /*secret: "test",

    jwt: {
      secret: "test",
      encryption: true,
    },*/
  },
});
