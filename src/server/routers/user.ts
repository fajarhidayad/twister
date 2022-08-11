import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createRouter } from "../createRouter";
import { getSessionOrThrow } from "../middleware";

export const user = createRouter()
  .query("getUserProfile", {
    input: z.string(),
    async resolve({ ctx, input }) {
      const { session } = ctx;
      const userId = session && session.user ? session.user.id : "";

      if (userId === input) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Can't follow yourself",
        });
      }

      const user = await ctx.prisma.user.findUniqueOrThrow({
        where: { id: input },
        include: {
          tweets: {
            orderBy: {
              createdAt: "desc",
            },
            include: {
              user: true,
              likes: {
                where: {
                  userId,
                },
              },
              comments: true,
              _count: {
                select: {
                  likes: true,
                  bookmarks: true,
                  comments: true,
                },
              },
            },
          },
          followedBy: {
            where: {
              followerId: userId,
            },
          },
          _count: {
            select: {
              following: true,
              followedBy: true,
            },
          },
        },
      });

      if (!user) {
        throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
      }

      return user;
    },
  })
  .mutation("follow", {
    input: z.string(),
    async resolve({ ctx, input }) {
      const userId = getSessionOrThrow(ctx).id;
      const followerId_followingId = { followerId: userId, followingId: input };

      const isFollow = await ctx.prisma.follows.findUnique({
        where: {
          followerId_followingId,
        },
      });

      if (isFollow) {
        return await ctx.prisma.follows.delete({
          where: { followerId_followingId },
        });
      }

      return await ctx.prisma.follows.create({
        data: { followerId: userId, followingId: input },
      });
    },
  });
