import { Store, getStoreById } from '../../../app/models/store.model';
import { storeData } from '../../mocks/data.mock';

describe('Store Model', () => {

  it('getStoreById', async () => {
    Store.findByPk = jest.fn(() => Promise.resolve(storeData));
    const response = await getStoreById(1);
    expect(response).toEqual(storeData);
  });

});