const mongoose = require('mongoose');

const CuriosidadesSchema = new mongoose.Schema({
    title: String,
    curiosidade: String,
},
    { collection: 'Dados Curiosidades' }
);


module.exports = mongoose.model('CuriosidadesInfo', CuriosidadesSchema);