const soloController = require('../controllers/solo.controller');

module.exports = (app) => {
    app.get('/api/solo', soloController.getSolos);
    app.get('/api/solo/:id', soloController.getSoloById);
    app.post('/api/solo', soloController.createSolo);
    app.put('/api/solo/:id', soloController.updateSolo);
    app.delete('/api/solo/:id', soloController.deleteSolo);
    app.delete('/api/solo', soloController.deleteAll);
};