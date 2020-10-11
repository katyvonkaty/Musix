const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.set("view engine","js")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/', (req, res) => {
  res.render("home");
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
