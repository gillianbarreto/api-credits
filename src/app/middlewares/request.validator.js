import { param, body, validationResult } from 'express-validator';
import { outputMessage } from '../utils/output-message';

export const validateByUserRequest = () => {
  return [
    param('email')
      .isString()
      .notEmpty()
      .isEmail()
      .withMessage('Usuario Inválido')
  ];
}

export const validateByUserAndStoreRequest = () => {
  return [
    param('email')
      .isString()
      .notEmpty()
      .isEmail()
      .withMessage('Usuario Inválido'),
    param('store')
      .isString()
      .notEmpty()
      .withMessage('Campo Obligatorio')
  ];
}

export const validateManageCreditsRequest = () => {
  return [
    body('email')
      .notEmpty()
      .withMessage('Campo obligatorio')
      .isEmail()
      .withMessage('Usuario Inválido'),
    body('store')
      .notEmpty()
      .withMessage('Campo Obligatorio'),
    body('amount')
      .isNumeric()
      .withMessage('Monto de crédito inválido')
      .notEmpty()
      .withMessage('Campo Obligatorio')
  ];
}

export const validate = (req, res, next) => {

  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  const response = outputMessage(400, 'Request inválido', extractedErrors);
  return res.status(400).json(response);
};
