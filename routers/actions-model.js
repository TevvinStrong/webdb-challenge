const router = require('express').Router();

const Actions = require('../data/helpers/actionModel.js');

// Routes
router.get('/', (req, res) => {
    Actions.find()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error retrieving the actions' });
        });
});

router.post('/', (req, res) => {
    Actions.add(req.body)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

/*
router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error updating the action' });
        });
});

router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error deleting the action' });
        });
});
*/

module.exports = router;