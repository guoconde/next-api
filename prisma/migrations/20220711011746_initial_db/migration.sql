-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(32) NOT NULL,
    "cpf" VARCHAR(18) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "saldo" DECIMAL(15,2) NOT NULL,
    "limite" DECIMAL(15,2) NOT NULL,
    "cep" VARCHAR(10) NOT NULL,
    "logradouro" VARCHAR(32) NOT NULL,
    "bairro" VARCHAR(32) NOT NULL,
    "numero" VARCHAR(6) NOT NULL,
    "cidade" VARCHAR(32) NOT NULL,
    "uf" VARCHAR(2) NOT NULL,
    "avatar_url" VARCHAR(128) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);
