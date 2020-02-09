const mongoose = require('mongoose');

const BatSchema = new mongoose.Schema({
    especie: String,
    familia: String,
    distgeo: String,
    habalim: String,
    fordent: {
        type: Object,
        info: String,
        image: String,
    },
    repro: String,
    mododevida: String,
    image: String,
},
{collection:'Dados Morcegos'}
);


module.exports = mongoose.model('Bats', BatSchema);

