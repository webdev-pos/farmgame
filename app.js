const express = require('express');
const app = express();
const parseUrl = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const { resolveSoa } = require('dns');
const fs = require("fs");

dotenv.config();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./views'));

app.get('/', (req, res) => {
    res.render('./views');
})