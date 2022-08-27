const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());




app.listen(port, () => console.log('servidor arriba en el puerto: ', port));