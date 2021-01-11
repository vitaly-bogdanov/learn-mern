const express = require('express');
const app = express();
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = config.get('port') || 5000;
const DB_PORT = config.get('db_port');
const DB_HOST = config.get('db_host');
const DB_NAME = config.get('db_name');
const DB_PASSWORD = config.get('db_password');
const DB_USERNAME = config.get('db_username');

app.use(express.json({extended: true}))

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['post', 'get']
}));

app.use(require('./app/routes'))

async function start() {
  try {
    await mongoose.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useUnifiedTopology: true
    });
  } catch (e) {
    console.log("Error: ", e.message);
    process.exit(1);
  }
}

start();

app.listen(PORT, () => console.log(`PORT: ${PORT}`))