/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `clients` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "clients" ALTER COLUMN "data_nascimento" SET DATA TYPE TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "clients_cpf_key" ON "clients"("cpf");
