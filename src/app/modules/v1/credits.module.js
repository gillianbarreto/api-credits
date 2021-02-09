import { success, notFound, internalError } from '../../utils/output-message';
import { getUserByEmail } from '../../models/user.model';
import { addCredits, getCreditsByUser, getCreditsByUserAndStore } from '../../models/credits.model';
import { createCreditsHistory } from '../../models/credits-history.model';

export const creditsByUserModule = async (email) => {
  try {
    const user = await getUserByEmail(email);
    if (!user) return notFound();
    const response = await getCreditsByUser(user.idUser);
    return success(response);
  } catch (error) {
    return internalError(error);
  }
}

export const creditsByUserAndStoreModule = async (email, store) => {
  try {
    const user = await getUserByEmail(email);
    if (!user) return notFound();
    const response = await getCreditsByUserAndStore(user.idUser, store);
    return success(response);
  } catch (error) {
    return internalError(error);
  }
}

export const manageCreditsModule = async (data) => {
  try {
    const user = await getUserByEmail(data.email);
    if (!user) return notFound();
    await createCreditsHistory(user.idUser, data)
    const response = await addCredits(user.idUser, data);
    return success(response);
  } catch (error) {
    return internalError(error);
  }
}
