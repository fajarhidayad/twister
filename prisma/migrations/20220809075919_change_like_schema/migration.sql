/*
  Warnings:

  - The primary key for the `LikeTweet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `LikeTweet` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `LikeTweet` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LikeTweet" DROP CONSTRAINT "LikeTweet_pkey",
DROP COLUMN "id",
DROP COLUMN "status",
ADD CONSTRAINT "LikeTweet_pkey" PRIMARY KEY ("userId", "tweetId");
