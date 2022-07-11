import { clientSchema } from "../schema/clientSchema.js";
import { ClientType } from "../services/clientServices.js";
import { wrongSchemaError } from '../utils/errorUtils.js';

export function validate(data: ClientType) {

  const validation = clientSchema.validate(data)
  if (validation.error) throw wrongSchemaError();
}
