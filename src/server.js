import 'dotenv/config';
import express from 'express';
import Routes from './routes/index.js';
import './models/index.js'

const app = express();
app.use(express.json())


Routes(app);
app.use((req, res) => {
  return res.status(404).send('f')
})
app.listen(process.env.API_PORT, () => {
  console.log('sistema rodando na porta ' + process.env.API_PORT);
});
