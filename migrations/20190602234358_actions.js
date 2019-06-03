
exports.up = function (knex, Promise) {
    return knex.schema.createTable('action', (tbl) => {
        tbl.increments('id');

        tbl
            .string('description')
            .notNullable()

        tbl
            .string('notes')
            .notNullable()

        tbl
            .boolean('status')
            .notNullable()

        tbl.integer('project_id')
            .references('id')
            .inTable('project')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('action');
};
