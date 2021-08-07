module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 54321),
        database: env("DATABASE_NAME", "smart-pos"),
        username: env("DATABASE_USERNAME", "smart-pos"),
        password: env("DATABASE_PASSWORD", "smart-pos"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
