import { Credits, getCreditsByUser, getCreditsByUserAndStore, addCredits } from '../../../app/models/credits.model';
import { creditsFindAll, creditBody, creditFindOne } from '../../mocks/data.mock';

describe('Credits Model', () => {

  it('getCreditsByUser', async () => {
    Credits.findAll = jest.fn(() => Promise.resolve(creditsFindAll));
    const response = await getCreditsByUser(1);
    expect(response).toEqual(creditsFindAll);
  });

  it('getCreditsByUserAndStore', async () => {
    Credits.findAll = jest.fn(() => Promise.resolve([creditsFindAll[0]]));
    const response = await getCreditsByUserAndStore(1, 'A');
    expect(response[0]).toEqual(creditsFindAll[0]);
  });

  it('addCredits - existe', async () => {
    Credits.findOne = jest.fn(() => Promise.resolve({ ...creditFindOne }));
    const response = await addCredits(1, { ...creditBody });
    expect(response.amount).toEqual(8000);
  });

  it('addCredits - no existe', async () => {
    Credits.findOne = jest.fn(() => Promise.resolve(null));
    Credits.create = jest.fn(() => Promise.resolve({ ...creditFindOne }));
    const response = await addCredits(1, { ...creditBody });
    expect(response.amount).toEqual(10000);
  });

  it('addCredits - error', async () => {
    try {
      Credits.findOne = () => Promise.reject(null);
      await addCredits(1, { ...creditBody });
    } catch (error) {
      expect(error.message).toBe('Credits not updated. idUser: 1 idStore: A');
    }
  });

});