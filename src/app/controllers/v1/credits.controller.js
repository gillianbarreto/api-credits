import {
  creditsByUserModule,
  creditsByUserAndStoreModule,
  manageCreditsModule
} from '../../modules/v1/credits.module';

export const creditsByUserController = async (req, res) => {
  const { email } = req.params;
  const response = await creditsByUserModule(email);
  return res.status(response.code).send(response);
};

export const creditsByUserAndStoreController = async (req, res) => {
  const { email, store } = req.params;
  const response = await creditsByUserAndStoreModule(email, store);
  return res.status(response.code).send(response);
};

export const manageCreditsController = async (req, res) => {
  const data = req.body;
  const response = await manageCreditsModule(data);
  return res.status(response.code).send(response);
};
