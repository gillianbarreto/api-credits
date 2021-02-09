export const healthcheckController = (req, res) => {
  return res.status(200).send({ code: 'OK' });
};