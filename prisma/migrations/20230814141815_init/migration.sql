-- CreateTable
CREATE TABLE "profileUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profileUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profileUser_username_key" ON "profileUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "profileUser_email_key" ON "profileUser"("email");
