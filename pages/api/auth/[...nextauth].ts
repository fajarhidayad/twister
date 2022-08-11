import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "#/server/prisma";
import { NextAuthOptions } from "next-auth";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

const googleProvider = GoogleProvider({
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
});

export const authOptions: NextAuthOptions = {
  providers: [googleProvider],
};

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [googleProvider],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      if (session.user) {
        session.user.id = token.uid;
        const user = await prisma.user.findUniqueOrThrow({
          where: { id: token.uid },
        });
        session.user.username = user.username as string;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});
