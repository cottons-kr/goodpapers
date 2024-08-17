/*
  Warnings:

  - You are about to drop the column `storyId` on the `Like` table. All the data in the column will be lost.
  - Added the required column `commentId` to the `Like` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_storyId_fkey";

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "storyId",
ADD COLUMN     "commentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
