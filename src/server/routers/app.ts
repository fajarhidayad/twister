import { createRouter } from "../createRouter";
import superjson from "superjson";

export const appRouter = createRouter()
  .transformer(superjson)
  .query("home", {
    resolve() {
      return "Welcome!";
    },
  });

export type AppRouter = typeof appRouter;
