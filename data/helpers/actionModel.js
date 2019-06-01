const db = require('../../data/dbConfig.js');

function find() {
    return db('action');
}

function findById(id) {
    return db('action')
        .where({ id })
        .first();
}

function add(action) {
    return db('action')
        .insert(action, 'id')
        .then(([id]) => {
            return findById(id);
        });
}

function update(id, changes) {
    return db('action')
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id);
            } else {
                return null;
            }
        });
}

function remove(id) {
    return db('action')
        .where({ id })
        .del();
}


module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};