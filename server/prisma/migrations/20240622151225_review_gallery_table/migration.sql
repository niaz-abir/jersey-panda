/*
  Warnings:

  - Added the required column `category` to the `Jersey` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JerseyCategory" AS ENUM ('CLUB', 'NATIONAL');

-- AlterTable
ALTER TABLE "Jersey" ADD COLUMN     "category" "JerseyCategory" NOT NULL;

-- CreateTable
CREATE TABLE "ReviewGallery" (
    "id" TEXT NOT NULL,
    "firstImage" TEXT NOT NULL,
    "secondImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "ReviewGallery_pkey" PRIMARY KEY ("id")
);
