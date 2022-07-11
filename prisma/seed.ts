import { PrismaClient, Client, Prisma } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
  await cleanDB()
  await createClientLists()
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

async function cleanDB() {
  await prisma.client.deleteMany({})
}

async function createClientLists() {
  const data: Omit<Client, 'id'>[] = [
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-11',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-12',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-13',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-14',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-15',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-16',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-17',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-18',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-19',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-10',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-21',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-22',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-23',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-24',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
    {
      nome: 'Qualquer qualquer',
      cpf: '111.111.111-25',
      data_nascimento: new Date('2022-10-10'),
      saldo: new Prisma.Decimal(10),
      limite: new Prisma.Decimal(235),
      cep: '74.305-290',
      logradouro: 'qualquer',
      bairro: 'bairro qualquer',
      numero: '12',
      cidade: 'cidade qualquer',
      uf: 'PA',
      avatar_url: 'https://t3.ftcdn.net/jpg/02/09/37/00/360_F_209370065_JLXhrc5inEmGl52SyvSPeVB23hB6IjrR.jpg'
    },
  ]

  await prisma.client.createMany({ data })
  const clientList = prisma.client.findMany({})

  console.log(clientList)

  return clientList
}
