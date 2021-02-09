import swaggerUI from 'swagger-ui-express';
import appRoutes from '../routes';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { swaggerDoc } from '../../swagger-docs';
import { exceptionError } from '../app/utils/handle-errors';

const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(appRoutes);
app.use(exceptionError);

export default app;
