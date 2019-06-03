const router = require('express').Router();

const db = require('../data/helpers/actionModel.js');

// Routes
router.get('/', (req, res) => {
    db.find()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error retrieving the actions' });
        });
});

router.post('/', (req, res) => {
    db.add(req.body)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

/*
router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error updating the action' });
        });
});

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error deleting the action' });
        });
});
*/

module.exports = router;