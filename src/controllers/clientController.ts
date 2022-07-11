import { Request, Response } from 'express';
import { validate } from '../middleware/validationMiddleware.js';
import * as clientRepository from '../repositories/clientRepository.js'
import { checkClient, checkClientById, checkIfExistClient } from '../services/clientServices.js';

export async function clients(req: Request, res: Response) {
  const { page } = req.params

  const clients = await clientRepository.getClients(parseInt(page))

  res.send(clients)
}

export async function clientsFullList(req: Request, res: Response) {
  const clients = await clientRepository.getClientFullList()

  res.send(clients)
}

export async function newClient(req: Request, res: Response) {
  const data = req.body

  validate(data)
  await checkClient(data.cpf)
  await clientRepository.newClient(data)

  res.sendStatus(201)
}

export async function updateClient(req: Request, res: Response) {
  const data = req.body
  const { id } = req.params

  validate(data)
  await checkClientById(data.cpf, parseInt(id))
  await clientRepository.updateClient(data)

  res.sendStatus(200)
}

export async function deleteClient(req: Request, res: Response) {
  const { id } = req.params

  await checkIfExistClient(parseInt(id))
  await clientRepository.deleteClient(parseInt(id))

  res.sendStatus(200)
}
