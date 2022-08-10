import { createRouter } from "../createRouter";
import superjson from "superjson";
import { tweets } from "./tweet";
import { user } from "./user";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("user.", user)
  .merge("tweet.", tweets);

export type AppRouter = typeof appRouter;
