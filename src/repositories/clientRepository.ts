import { prisma } from '../database.js';
import { ClientType } from '../services/clientServices.js';

export async function getClientFullList() {
  const clientsList = await prisma.client.findMany({
    orderBy: {
      id: 'asc'
    },
  })

  return clientsList
}

export async function getClients(page: number) {

  const filteredSkip = (page - 1) * 10
  const filteredTake = page * 10

  const clientsList = await prisma.client.findMany({
    orderBy: {
      id: 'asc'
    },
    skip: filteredSkip,
    take: filteredTake
  })

  return clientsList
}

export async function newClient(data: ClientType) {
  const client = await prisma.client.create({
    data: {
      ...data,
      data_nascimento: new Date(data.data_nascimento),
    }
  })

  return client
}

export async function findClientByCpf(cpf: string) {
  const cpfRegistered = await prisma.client.findUnique({
    where: {
      cpf: cpf
    }
  })

  return cpfRegistered
}

export async function findClientById(id: number) {
  const cpfRegistered = await prisma.client.findUnique({
    where: {
      id
    }
  })

  return cpfRegistered
}

export async function updateClient(data: ClientType) {
  const client = await prisma.client.update({
    where: {
      cpf: data.cpf
    },
    data: {
      ...data,
      data_nascimento: new Date(data.data_nascimento)
    }
  })

  return client
}

export async function deleteClient(id: number) {
  const deleted = await prisma.client.delete({
    where: {
      id
    }
  })

  return deleted
}
