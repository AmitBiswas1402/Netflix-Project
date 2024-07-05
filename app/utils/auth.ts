import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./db"
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from "next-auth/providers/email";

export const authoptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        GithubProvider({
            clientId:  process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET  as string,
        }),
        GoogleProvider({
            clientId:  process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        EmailProvider({
            
        })    
        
    ]
    
}