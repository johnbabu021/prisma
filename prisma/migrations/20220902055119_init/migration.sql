-- CreateTable
CREATE TABLE "johny" (
    "id" SERIAL NOT NULL,
    "friends" TEXT[],

    CONSTRAINT "johny_pkey" PRIMARY KEY ("id")
);
