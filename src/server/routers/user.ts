import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createRouter } from "../createRouter";

export const user = createRouter().query("getUserProfile", {
  input: z.string(),
  async resolve({ ctx, input }) {
    const { session } = ctx;
    const userId = session && session.user ? session.user.id : "";

    const user = await ctx.prisma.user.findUnique({
      where: { username: input },
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
});
