const code = {
  type: 'integer',
  description: 'Código del response'
};

const message = {
  type: 'string',
  description: 'Descripción del response'
};

const propertiesError = {
  code,
  message,
  payload: {
    type: 'object',
    properties: {}
  }
};

const responseGetCredits = {
  'application/json': {
    schema: {
      type: 'object',
      properties: {
        code,
        message,
        payload: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              idUser: {
                type: 'integer',
                description: 'Id del usuario'
              },
              idStore: {
                type: 'string',
                description: 'Código de la tienda'
              },
              amount: {
                type: 'integer',
                description: 'Monto del crédito'
              },
              updateAt: {
                type: 'string',
                description: 'Fecha de última actualización del crédito'
              }
            }
          }
        }
      }
    },
    example: {
      "code": 200,
      "message": "Success",
      "payload": [
        {
          "idUser": 2,
          "idStore": "A",
          "amount": 10000,
          "updateAt": "2021-02-08T03:51:25.000Z"
        }
      ]
    }
  }
}

const responseManageCredits = {
  'application/json': {
    schema: {
      type: 'object',
      properties: {
        idUser: {
          type: 'integer',
          description: 'Id del usuario'
        },
        idStore: {
          type: 'string',
          description: 'Código de la tienda'
        },
        amount: {
          type: 'integer',
          description: 'Monto acumulado del crédito'
        },
        updateAt: {
          type: 'string',
          description: 'Fecha de última actualización del crédito'
        }
      }
    },
    example: {
      "code": 200,
      "message": "Success",
      "payload": {
        "idUser": 2,
        "idStore": "A",
        "amount": 9000,
        "updateAt": "2021-02-09T03:06:06.962Z"
      }
    }
  }
}

const responseError404 = {
  description: 'Usuario no encontrado',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: propertiesError
      },
      example: {
        "code": 404,
        "message": "Not Found",
        "payload": null
      }
    }
  }
}

const responseError500 = {
  description: 'Error en la consulta',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: propertiesError
      },
      example: {
        "code": 500,
        "message": "Error Internal",
        "payload": null
      }
    }
  }
}

const responseBadRequest = {
  description: 'Datos de entrada inválidos',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: propertiesError
      },
      example: {
        "code": 400,
        "message": "Request inválido",
        "payload": [
          {
            "email": "Usuario Inválido"
          }
        ]
      }
    },
  }
}

module.exports = {
  responseGetCredits,
  responseError404,
  responseError500,
  responseBadRequest,
  responseManageCredits
}