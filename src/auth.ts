import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import CredentialsProvider  from 'next-auth/providers/credentials';
import kakaoProvider from "next-auth/providers/kakao";
export const { handlers:{GET,POST}, auth, signIn } = NextAuth({ 
  pages:{
    signIn:'/i/flow/login',
    newUser:'/i/flow/signup'
  },
  providers: [ 
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id:credentials.username,password:credentials.password}),
        })

        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()

        return user
      },
    }),
  ],
}) 