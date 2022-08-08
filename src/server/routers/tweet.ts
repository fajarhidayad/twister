import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { Context } from "../context";
import { createRouter } from "../createRouter";

const getSessionOrThrow = (ctx: Context) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You have to logged in to create tweet",
    });
  }

  return ctx.session.user;
};

export const tweets = createRouter()
  .query("getAllTweet", {
    async resolve({ ctx }) {
      const tweets = await ctx.prisma.tweet.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          user: true,
        },
      });

      return tweets;
    },
  })
  .mutation("addTweet", {
    input: z.object({
      text: z.string().max(255),
    }),
    async resolve({ ctx, input }) {
      const { prisma } = ctx;
      const email = getSessionOrThrow(ctx).email as string;

      const user = await prisma.user.findUniqueOrThrow({
        where: {
          email,
        },
      });

      const newTweet = await prisma.tweet.create({
        data: {
          text: input.text,
          userId: user.id,
        },
      });

      return newTweet;
    },
  });
