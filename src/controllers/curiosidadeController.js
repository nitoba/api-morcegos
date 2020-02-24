const Curiosidades = require('../models/CuriosidadesModel');

module.exports = {

    async index(req, res) {

        const curiosidedadesInfo = await Curiosidades.find();
        return res.json(curiosidedadesInfo);
    },

    async store(req, res) {

        const { title, curiosidade } = req.body;

        const post = await Curiosidades.create({
            title,
            curiosidade
        });

        return res.json(post);
    }
};