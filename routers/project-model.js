const router = require('express').Router();

const db = require('../data/helpers/projectModel');

// Routes

router.get('/', (req, res) => {
    db.find()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json({ error: 'Unable to retrieve the specified request from the database.', error });
        });
});
/*
router.get('/:id', (req, res) => {
    db.findById(req.params.id)
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error retrieving the projects' });
        });
});
*/

router.post('/', (req, res) => {
    db.add(req.body)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error adding the project' });
        });
});

/*
router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error updating the project' });
        });
});

router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            res.status(500).json({ message: 'We ran into an error deleting the project' });
        });
});
*/


router.get('/:id/actions', (req, res) => {
    db.findWithActions(req.params.id)
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});





module.exports = router; 