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
      const { session } = ctx;
      const userId = session && session.user ? session.user.id : "";

      const tweets = await ctx.prisma.tweet.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          user: true,
          comments: true,
          likes: {
            where: {
              userId,
            },
          },
          _count: true,
        },
      });

      return tweets;
    },
  })
  .query("getTweetById", {
    input: z.string(),
    async resolve({ ctx, input }) {
      const { session } = ctx;
      const userId = session && session.user ? session.user.id : "";

      const tweet = await ctx.prisma.tweet.findUniqueOrThrow({
        where: { id: input },
        include: {
          _count: true,
          user: true,
          comments: true,
          likes: {
            where: {
              userId,
            },
          },
        },
      });

      return tweet;
    },
  })
  .query("getTweetByUserAuth", {
    async resolve({ ctx }) {
      const { prisma, session } = ctx;
      const userId = session && session.user ? session.user.id : "";

      const tweets = await prisma.tweet.findMany({
        where: {
          userId,
          OR: {
            user: {
              following: {
                every: {
                  followerId: userId,
                },
              },
            },
          },
        },
        orderBy: { createdAt: "desc" },
        include: {
          user: true,
          comments: true,
          likes: {
            where: {
              userId,
            },
          },
          _count: true,
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
  })
  .mutation("likeTweet", {
    input: z.string(),
    async resolve({ ctx, input }) {
      const { prisma } = ctx;
      const email = getSessionOrThrow(ctx).email as string;

      const user = await prisma.user.findUniqueOrThrow({ where: { email } });
      const likeTweet = await prisma.likeTweet.findFirst({
        where: { userId: user.id, tweetId: input },
      });

      if (likeTweet) {
        return await prisma.likeTweet.delete({
          where: {
            userId_tweetId: {
              tweetId: input,
              userId: user.id,
            },
          },
        });
      }

      return await prisma.likeTweet.create({
        data: { userId: user.id, tweetId: input },
      });
    },
  });
