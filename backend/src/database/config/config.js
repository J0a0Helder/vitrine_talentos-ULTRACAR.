const options = {
  host: 'localhost',
  port: '3306',
  database: 'ultracar-jh-dev',
  username: 'root',
  password: 'password',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
