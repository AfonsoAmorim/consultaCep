const express = require('express');
const cors = require('cors');
const Correio = require('node-correios');
const correio = new Correio;
const app = express();
const PORT = 3001;

app.use(cors());

app.listen(PORT, () => console.log('A PORTA É A:' + PORT));

app.get('/', (req, res) => {
    const {tracking} = req.query;
    
    correio.consultaCEP({cep: tracking})
    .then(result => {
        res.send(result);
        console.log(result);

    })
    .catch(error => {
        console.log(error);
    })

});


