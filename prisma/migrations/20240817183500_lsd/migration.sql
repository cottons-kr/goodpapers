/*
  Warnings:

  - Added the required column `title` to the `Story` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Story" ADD COLUMN     "title" TEXT NOT NULL;
