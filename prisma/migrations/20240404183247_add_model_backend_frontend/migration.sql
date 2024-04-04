-- CreateTable
CREATE TABLE "backend" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "url" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "backend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "frontend" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT,
    "url" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "frontend_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "backend_title_key" ON "backend"("title");

-- CreateIndex
CREATE UNIQUE INDEX "frontend_title_key" ON "frontend"("title");
