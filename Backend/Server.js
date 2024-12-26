const express = require('express');
const cors = require('cors');
const dbconnect = require('./Configs/Database');
const authRoutes = require('../Backend/Routes/auth');
const documentRoutes = require('../Backend/Routes/document');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

require('dotenv').config();
dbconnect();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
})