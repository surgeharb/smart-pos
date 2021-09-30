module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 54321),
      database: env('DATABASE_NAME', 'smart-pos'),
      user: env('DATABASE_USERNAME', 'smart-pos'),
      password: env('DATABASE_PASSWORD', 'smart-pos'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
