const mongoose = require('mongoose');

const EcoSchema = new mongoose.Schema({
    quem: String,
    anatomorfologia: String,
    repro: String,
    ecoloc: String,
    inimigos: String,

},
    { collection: 'Dados Ecologia' }
);


module.exports = mongoose.model('EcoInfo', EcoSchema);

