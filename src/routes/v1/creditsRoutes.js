import { Router } from 'express';
import {
  validateByUserAndStoreRequest,
  validateByUserRequest,
  validateManageCreditsRequest,
  validate
} from '../../app/middlewares/request.validator';
import {
  creditsByUserController,
  creditsByUserAndStoreController,
  manageCreditsController
} from '../../app/controllers/v1/credits.controller';

const CreditRoutes = Router();

CreditRoutes.get('/:email', validateByUserRequest(), validate, creditsByUserController);
CreditRoutes.get('/:email/:store', validateByUserAndStoreRequest(), validate, creditsByUserAndStoreController);
CreditRoutes.post('/', validateManageCreditsRequest(), validate, manageCreditsController);

export default CreditRoutes;