-- CreateTable
CREATE TABLE "Tesst" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Tesst_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tesst" ADD CONSTRAINT "Tesst_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
