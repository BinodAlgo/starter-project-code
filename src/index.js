const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', { user: { username: 'Shyam', password: 'x123' } });
});
app.listen(PORT);
