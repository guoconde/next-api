import joi from 'joi';
import { ClientType } from '../services/clientServices.js';

export const clientSchema = joi.object<ClientType>({
  nome: joi.string().required(),
  cpf: joi.string().required(),
  data_nascimento: joi.string().required(),
  saldo: joi.number().precision(2).required(),
  limite: joi.number().precision(2).required(),
  cep: joi.string().required(),
  logradouro: joi.string().required(),
  bairro: joi.string().required(),
  numero: joi.string().min(0),
  cidade: joi.string().required(),
  uf: joi.string().min(2).max(2).required(),
  avatar_url: joi.string().uri().required()
});
