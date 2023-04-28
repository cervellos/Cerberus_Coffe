import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    // OAuth authentication providers...

    GoogleProvider({
      clientId:
        "277388636238-tbq47ad9gaovi2usfpjkn3qiq4me9ijl.apps.googleusercontent.com ",
      clientSecret: "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",
    }),
  ],
});
