export const userData = {
  idUser: 1,
  name: 'Pedro Lopez',
  email: 'pedro@lopez.cl',
  createdAt: '2020-11-13 19:23:32.000000'
};

export const storeData = {
  idStore: 'A',
  name: 'Tienda A',
  createdAt: '2020-11-13 19:23:32.000000'
};

export const creditBody = {
  email: 'pedro@lopez.cl',
  store: 'A',
  amount: -2000
}

export const creditCreate = {
  idUser: 1,
  idStore: 'A',
  amount: 10000,
  updateAt: '2020-11-13 19:23:32.000000'
}

export const creditFindOne = {
  idUser: 1,
  idStore: 'A',
  amount: 10000,
  updateAt: '2020-11-13 19:23:32.000000',
  save: () => { return true }
}

export const creditsFindAll = [
  {
    idUser: 1,
    idStore: 'A',
    amount: 10000,
    updateAt: '2020-11-13 19:23:32.000000'
  },
  {
    idUser: 1,
    idStore: 'B',
    amount: 20000,
    updateAt: '2020-11-13 19:23:32.000000'
  }
];

export const creditsFindAllByStore = [
  {
    idUser: 1,
    idStore: 'A',
    amount: 10000,
    updateAt: '2020-11-13 19:23:32.000000'
  }
];
