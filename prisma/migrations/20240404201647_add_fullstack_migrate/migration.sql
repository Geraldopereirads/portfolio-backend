-- CreateTable
CREATE TABLE "fullstack" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "url" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "fullstack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fullstack_title_key" ON "fullstack"("title");
