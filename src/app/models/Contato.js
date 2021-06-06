import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Contato extends Model {
  static init(sequelize) {
    super.init({
      pnome: Sequelize.STRING,
      snome: Sequelize.STRING,
      endereco: Sequelize.STRING,
      fone: Sequelize.INTEGER
    },{
      sequelize,
      tableName: 'contatos'
    });

    return this;
  }
}

export default Contato;