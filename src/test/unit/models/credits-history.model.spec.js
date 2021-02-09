import { CreditsHistory, createCreditsHistory } from '../../../app/models/credits-history.model';
import { creditBody, creditFindOne } from '../../mocks/data.mock';

describe('CreditsHistory Model', () => {

  it('createCreditsHistory', async () => {
    CreditsHistory.create = jest.fn(() => Promise.resolve(creditFindOne));
    const response = await createCreditsHistory(1, { ...creditBody });
    expect(response).toEqual(creditFindOne);
  });

});