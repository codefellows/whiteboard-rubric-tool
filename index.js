require('dotenv').config();

const mongoose = require('mongoose');
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI);

const express = require('express');
const app = express();

// attach the bundler after other routes
// or else it will catch everything!
const Bundler = require('parcel-bundler');
const bundler = new Bundler('./index.html');
app.use(bundler.middleware());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
});
