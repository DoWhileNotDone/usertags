module.exports = {
  "development":  {
    "username": "express",
    "password": "password",
    "database": "express",
    "host": "127.0.0.1",
    "post": 5432,
    "dialect": "postgres",
    "quoteIdentifiers": false
  },
  "test": {
    "username": "express",
    "password": "password",
    "database": "express",
    "host": "127.0.0.1",
    "post": 5432,
    "dialect": "postgres",
    "quoteIdentifiers": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "quoteIdentifiers": false
  }
}
