const Morcegos = require('../models/batModel');

module.exports = {

    async index(req, res){

        const bats = await Morcegos.find();
        return res.json(bats);
    },

    async item(req, res){
        const item = await Morcegos.findById(req.params.id);
        return res.json(item);
    },

    async store(req, res){

        const { especie, familia, distgeo, habalim, fordent, repro, mododevida, image } = req.body;

        const post = await Morcegos.create({
            especie,
            familia,
            distgeo,
            habalim,
            fordent,
            repro,
            mododevida,
            image,
        });

        return res.json(post);
    } 
};