require('dotenv').load();
const mongojs = require('mongojs');

const collections = ['bankruptcy, ocr'];

const db = mongojs(process.env.MONGODB_URL, collections);

module.exports = db;
