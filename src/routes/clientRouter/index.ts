import { Router } from 'express';
import * as clientController from '../../controllers/clientController.js'

const clientRouter = Router();

clientRouter
  .get('/clients/:page', clientController.clients)
  .get('/clients', clientController.clientsFullList)
  .post('/insertClient', clientController.newClient)
  .put('/edit/:id', clientController.updateClient)
  .delete('/delete/:id', clientController.deleteClient)

export default clientRouter;
