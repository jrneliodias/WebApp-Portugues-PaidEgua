/*
  Warnings:

  - Added the required column `birthdate` to the `profileUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profession` to the `profileUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schooling` to the `profileUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situation` to the `profileUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeInBelem` to the `profileUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeInBrazil` to the `profileUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profileUser" ADD COLUMN     "birthdate" TIMESTAMPTZ(5) NOT NULL,
ADD COLUMN     "profession" TEXT NOT NULL,
ADD COLUMN     "schooling" TEXT NOT NULL,
ADD COLUMN     "situation" TEXT NOT NULL,
ADD COLUMN     "timeInBelem" TEXT NOT NULL,
ADD COLUMN     "timeInBrazil" TEXT NOT NULL;
