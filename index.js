const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();


const allowedOrigins = [
  'http://localhost:3000',
  'https://products-jzopiy9th-princegarg23s-projects.vercel.app',
  'https://products-ecru-mu.vercel.app'
];

const cors = require('cors');
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS not allowed from ${origin}`));
    }
  },
  credentials: true
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