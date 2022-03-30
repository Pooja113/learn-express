const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname,"static")))
app.use('/', require(path.join(__dirname,"routes/blog.js")))


app.listen(port, () => {
  console.log(`Learning Blog listening at http://localhost:${port}`)
})