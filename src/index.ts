import express from 'express';
import healthRouter from './health/router';
import userRouter from './user/router';
import sequelize from './db/db';
import { appConfig } from './config';

sequelize.sync({ force: true });

const config = appConfig;
const app = express();
const port = appConfig.port;
app.use(express.json());

app.use(healthRouter);
app.use(userRouter);

app.listen(port, () => {
  const basePath = config.basePath;
  console.log(`Server running on port ${port} on ${basePath}`);
});

export default app;
