const db = require('../../data/dbConfig');
const knex = require('knex');


function find() {
    return db('project');
}

function findById(id) {
    return db('project')
        .where({ id })
        .first();
}

function add(project) {
    return db('project')
        .insert(project, 'id')
        .then(([id]) => {
            return findById(id);
        });
}

function update(id, changes) {
    return db('project')
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
    return db('project')
        .where({ id })
        .del();
}

/*TODO:COME BACK TO THIS IF CAUSING ERRORS*/
function getWithActions(id) {
    return db('project')
        .innerJoin('action', 'project.id', 'action.project_id')
        .where({ id })
        .select('project', 'action')
        .first();
}

function findWithActions(id) {
    return db('project')
        .where({ id })
        .first();

    return db('action')
        .where({ project_id })
        .first();

}

function findWithActions(id) {
    // console.log(db('projects.id'))
    return db('project', 'action')
        .where({ project_id: id })
        .join('action', 'project.id', 'action.project_id')
        .distinct()
    /*
    return db('project')
        .select('project.name', 'action.description')
        .innerJoin('action', 'project.id', 'action.project_id')
        .where({ id: id })
        .first();
    */
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getWithActions,
    findWithActions,
};