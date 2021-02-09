require('dotenv').config();
import app from './server';

app.listen(process.env.PORT, () => {
  console.log(`Server listening in the PORT: ${process.env.PORT}`);
});
