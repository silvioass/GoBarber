import Sequelize from 'sequelize';

import User from '../app/models/User';
import Students from '../app/models/Students';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, Students, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
