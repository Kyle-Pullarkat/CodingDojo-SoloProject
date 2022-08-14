const Solo = require('../models/solo.model');

module.exports = {

    getSolos: (req, res) => {
        Solo.find({})
        .then((solos) => {
            res.json(solos);
        })
        .catch((err) =>
            console.log(err));
    },

    getSoloById: (req, res) => {
        Solo.findOne({ _id: req.params.id })
        .then((solo) => {
            res.json(solo);
        })
        .catch((err) => 
            console.log(err));
    },

    createSolo: (req, res) => {
        Solo.create(req.body)
        .then((newSolo) => {
            res.status(201).json(newSolo);
        })
        .catch((err) => 
            console.log(err));
    },

    updateSolo: (req, res) => {
        Solo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
            .then((solo) => {
                res.json(solo);
            })
            .catch((err) => {
                console.log('ERROR in update', err);
                res.status(400).json({ message: 'something went wrong in update', error: err});
            });
    },


    deleteSolo: (req, res) => {
        Solo.deleteOne({ _id: req.params.id })
            .then((solo) => {
                res.json(solo);
            })
            .catch((err) => {
                console.log('ERROR in delete', err);
                res.status(400).json({ message: 'something went wrong in delete', error: err});
            })
    },

    deleteAll: (req, res) => {
        Solo.deleteMany()
        .then((solo) => {
            res.json(solo);
        })
        .catch((err) => {
            console.log('ERROR in delete', err);
            res.status(400).json({ message: 'something went wrong in delete', error: err});
        })
    }



};