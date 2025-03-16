/*
  Warnings:

  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_chatId_fkey";

-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "code" TEXT NOT NULL DEFAULT '//write something here',
ADD COLUMN     "codeReview" TEXT NOT NULL DEFAULT '//Review Will Be Shown Here ';

-- DropTable
DROP TABLE "Message";
