-- CreateTable
CREATE TABLE "Jersey" (
    "id" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "size" JSONB NOT NULL,
    "color" TEXT NOT NULL,
    "orginalPrice" INTEGER NOT NULL,
    "discountPrice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Jersey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomJersey" (
    "id" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "CustomJersey_pkey" PRIMARY KEY ("id")
);
