
exports.up = function (knex, Promise) {
    return knex.schema.createTable('project', (tbl) => {
        tbl.increments('id');

        tbl
            .string('name', 128)
            .unique()
            .notNullable();

        tbl
            .string('description')
            .notNullable()

        tbl
            .boolean('status')
            .notNullable()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('project');
};
