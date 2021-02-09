import express from 'express';
import CreditsRoutes from './creditsRoutes';

const version = '/v1';
const v1Routes = express();

v1Routes.use(`${version}/credits`, CreditsRoutes);

export default v1Routes;
