import { TRPCError } from "@trpc/server";
import { Context } from "./context";

export const getSessionOrThrow = (ctx: Context) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You have to logged in to create tweet",
    });
  }

  return ctx.session.user;
};
