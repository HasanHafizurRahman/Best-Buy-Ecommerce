import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_ID,
      // clientSecret: process.env.GOOGLE_SECRET,
      clientId:
        "621305768285-8r22ci9kd7qlrii5ctf7k48qkhc3perd.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
