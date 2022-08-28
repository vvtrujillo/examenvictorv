const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mongo.config');
require('./routes/usuario.route')(app);


app.listen(port, () => console.log('servidor arriba en el puerto: ', port));