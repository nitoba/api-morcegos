const EcoInfo = require('../models/EcoInfoModel');

module.exports = {

    async index(req, res) {

        const ecoinfo = await EcoInfo.find();
        return res.json(ecoinfo);
    },

    async store(req, res) {

        const { quem, anatomorfologia, repro, ecoloc, inimigos } = req.body;

        const post = await EcoInfo.create({
            quem,
            anatomorfologia,
            repro,
            ecoloc,
            inimigos
        });

        return res.json(post);
    }
};