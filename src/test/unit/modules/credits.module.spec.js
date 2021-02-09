import { creditsByUserModule, creditsByUserAndStoreModule, manageCreditsModule } from '../../../app/modules/v1/credits.module';
import { getCreditsByUser, getCreditsByUserAndStore, addCredits } from '../../../app/models/credits.model';
import { getUserByEmail } from '../../../app/models/user.model';
import { createCreditsHistory } from '../../../app/models/credits-history.model';
import { userData } from '../../mocks/data.mock';
import { message200, message404, message500 } from '../../mocks/response.mock';
import { creditCreate, creditsFindAll, creditsFindAllByStore, creditBody } from '../../mocks/data.mock';

jest.mock('../../../app/models/user.model');
jest.mock('../../../app/models/credits.model');
jest.mock('../../../app/models/credits-history.model');

describe('Credits Model', () => {

  const email = 'pedro@lopez.cl';

  it('creditsByUserModule - return 200', async () => {
    getUserByEmail.mockResolvedValue(userData);
    getCreditsByUser.mockResolvedValue(creditsFindAll);
    const response = await creditsByUserModule(email);
    expect(response).toEqual(message200(creditsFindAll));
  });

  it('creditsByUserModule - return 404', async () => {
    getUserByEmail.mockResolvedValue(null);
    const response = await creditsByUserModule(email);
    expect(response).toEqual(message404(null));
  });

  it('creditsByUserModule - return 500', async () => {
    getUserByEmail.mockRejectedValue(null);
    const response = await creditsByUserModule(email);
    expect(response).toEqual(message500(null));
  });

   it('creditsByUserAndStoreModule - return 200', async () => {
    getUserByEmail.mockResolvedValue(userData);
    getCreditsByUserAndStore.mockResolvedValue(creditsFindAllByStore);
    const response = await creditsByUserAndStoreModule(email, 'A');
    expect(response).toEqual(message200(creditsFindAllByStore));
  });

  it('creditsByUserAndStoreModule - return 404', async () => {
    getUserByEmail.mockResolvedValue(null);
    const response = await creditsByUserAndStoreModule(email, 'A');
    expect(response).toEqual(message404(null));
  });

  it('creditsByUserAndStoreModule - return 500', async () => {
    getUserByEmail.mockRejectedValue(null);
    const response = await creditsByUserAndStoreModule(email, 'A');
    expect(response).toEqual(message500(null));
  });

  it('manageCreditsModule - return 200', async () => {
    const credit = { ...creditCreate };
    getUserByEmail.mockResolvedValue(userData);
    createCreditsHistory.mockResolvedValue(true);
    credit.amount = 8000;
    addCredits.mockResolvedValue(credit);
    const response = await manageCreditsModule({ ...creditBody });
    expect(response).toEqual(message200(credit));
  });

  it('manageCreditsModule - return 404', async () => {
    getUserByEmail.mockResolvedValue(null);
    const response = await manageCreditsModule({ ...creditBody });
    expect(response).toEqual(message404(null));
  });

  it('manageCreditsModule - return 500', async () => {
    getUserByEmail.mockRejectedValue(null);
    const response = await manageCreditsModule({ ...creditBody });
    expect(response).toEqual(message500(null));
  });

});