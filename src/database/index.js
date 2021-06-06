import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Contato from '../app/models/Contato';

const connection = new Sequelize(databaseConfig);

Contato.init(connection);

module.exports = connection;

