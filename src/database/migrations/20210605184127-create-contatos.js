'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('contatos', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      pnome: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      snome: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      endereco: {
        type: Sequelize.STRING(180),
        allowNull: false,
      },
      fone: {
        type: Sequelize.INTEGER(15),
        allowNull: false,
        unique: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('contatos');
  }
};