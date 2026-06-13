const express = require('express');
const app = express();
const connectdb = require('./config/connectdb');
const cors = require('cors');

app.set('view engine', 'ejs');
app.set('views', './views/pages');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todoRouter = require('./router/todo');

app.use('/todo', todoRouter);

app.get('/', (req, res) => {
    res.render('pages/index'); 
});

connectdb();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});