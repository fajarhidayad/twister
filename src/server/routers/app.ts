import { createRouter } from "../createRouter";
import superjson from "superjson";
import { tweets } from "./tweet";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("tweet.", tweets);

export type AppRouter = typeof appRouter;
