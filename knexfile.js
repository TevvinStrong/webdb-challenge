// Update with your config settings.
module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/tevvin.db',
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },

    //sqlite does not enforce foreign keys by default
    pool: {
      afterCreate: (connection, done) => {
        connection.run("PRAGMA foreign_keys = ON", done);
      }
    }
  }
};

