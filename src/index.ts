import express from 'express';
import healthRouter from './health/router';
import userRouter from './user/router';
import sequelize from './db/db';

sequelize.sync({force: true})

const app = express();
app.use(express.json());

app.use(healthRouter);
app.use(userRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

export default app;
