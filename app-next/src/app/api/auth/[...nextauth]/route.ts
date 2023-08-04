import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";

import {prisma} from "@/lib/prisma";

const authOptions: AuthOptions ={
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // callbacks:{
  //   async session({session,token,user}){
  //     session.user = {...session, id:user.id} as {id:string; name:string;email:string};
  //   }
  // },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}

