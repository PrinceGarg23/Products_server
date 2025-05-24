const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
app.use(cors({
  origin: 'https://products-jzopiy9th-princegarg23s-projects.vercel.app',
  credentials: false,
}));

const PORT = process.env.PORT;
const connectDB = require('./config/db');
connectDB();

const productRoutes = require('./routes/productRoutes');
app.use(express.json());
app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Products app listening on port ${PORT}`)
})