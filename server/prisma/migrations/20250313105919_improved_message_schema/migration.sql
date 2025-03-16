/*
  Warnings:

  - You are about to drop the column `aiRes` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `userMsg` on the `Message` table. All the data in the column will be lost.
  - Added the required column `content` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "aiRes",
DROP COLUMN "userMsg",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "sender" TEXT NOT NULL;
