import { User, getUserById, getUserByEmail } from '../../../app/models/user.model';
import { userData } from '../../mocks/data.mock';

describe('User Model', () => {

  it('getUserById', async () => {
    User.findByPk = jest.fn(() => Promise.resolve(userData));
    const response = await getUserById(1);
    expect(response).toEqual(userData);
  });

  it('getUserByEmail', async () => {
    User.findOne = jest.fn(() => Promise.resolve(userData));
    const response = await getUserByEmail(userData.email);
    expect(response).toEqual(userData);
  });

});