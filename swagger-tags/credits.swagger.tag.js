const {
  responseGetCredits,
  responseError404,
  responseError500,
  responseBadRequest,
  responseManageCredits
} = require('./response');

const creditsByUser = {
  tags: ['Créditos'],
  description: 'Obtener créditos por usuario',
  operationId: 'creditsByUser',
  parameters: [
    {
      name: 'email',
      in: 'path',
      description: 'email del usuario',
      required: true,
      schema: {
        type: 'string'
      },
      example: 'pedro@lopez.cl'
    }
  ],
  responses: {
    200: {
      description: 'Consulta exitosa',
      content: responseGetCredits
    },
    400: responseBadRequest,
    404: responseError404,
    500: responseError500
  }
};

const creditsByUserAndStore = {
  tags: ['Créditos'],
  description: 'Obtener créditos por usuario y tienda',
  operationId: 'creditsByUserAndStore',
  parameters: [
    {
      name: 'email',
      in: 'path',
      description: 'email del usuario',
      required: true,
      schema: {
        type: 'string'
      },
      example: 'pedro@lopez.cl'
    },
    {
      name: 'store',
      in: 'path',
      description: 'código de la tienda',
      required: true,
      schema: {
        type: 'string'
      },
      example: 'A'
    }
  ],
  responses: {
    200: {
      description: 'Consulta exitosa',
      content: responseGetCredits
    },
    400: responseBadRequest,
    404: responseError404,
    500: responseError500
  }
}

const manageCredits = {
  tags: ['Créditos'],
  description: 'Añadir o restar créditos al usuario',
  operationId: 'manageCredits',
  requestBody: {
    description: 'Datos del crédito',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
              required: true,
              description: 'email del usuario',
              required: true,
              example: 'pedro@lopez.cl'
            },
            store: {
              type: 'string',
              required: true,
              description: 'código de la tienda'
            },
            amount: {
              type: 'integer',
              required: true,
              description: 'monto a sumar o restar del crédito'
            }
          },
          example: {
            email: 'pedro@lopez.cl',
            store: 'A',
            amount: -2000
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'Consulta exitosa',
      content: responseManageCredits
    },
    400: responseBadRequest,
    404: responseError404,
    500: responseError500
  }
}

module.exports = { creditsByUser, creditsByUserAndStore, manageCredits }
