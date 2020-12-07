const { SnakeNamingStrategy } = require("typeorm-naming-strategies");

module.exports = {
  type: 'sqlite',
  database: 'db/database.sqlite',
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
  logging: false,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscribers'
  }
};
