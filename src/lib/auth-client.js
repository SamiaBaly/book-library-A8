import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://book-library-a8-nof9.vercel.app",
});

export const { signIn, signUp, useSession } = authClient;