/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `projects` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "projects_title_key" ON "projects"("title");
