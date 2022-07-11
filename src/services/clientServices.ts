import { Client } from "@prisma/client";
import * as clientRepository from '../repositories/clientRepository.js'
import { conflictError, notFoundError } from '../utils/errorUtils.js';

export type ClientType = Omit<Client, 'id'>

export async function checkClient(cpf: string) {
  const cpfRegistered = await clientRepository.findClientByCpf(cpf)

  if (cpfRegistered) throw conflictError()
}

export async function checkClientById(cpf: string, id: number) {

  const client = await clientRepository.findClientByCpf(cpf)
  if(!client) throw notFoundError()
  if (client && client.id !== id) throw conflictError()
}

export async function checkIfExistClient(id: number) {
  const dbClient = await clientRepository.findClientById(id)
  if(!dbClient) throw notFoundError()
}
