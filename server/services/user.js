const UserModel = require('../models').User;
const BaseServiceFactory = require('./common').BaseServiceFactory;

const UserService = {
  add: BaseServiceFactory.makeAdd(UserModel),
  update: BaseServiceFactory.makeUpdate(UserModel),
  archive: BaseServiceFactory.makeArchive(UserModel),
  delete: BaseServiceFactory.makeDelete(UserModel),
  getById: BaseServiceFactory.makeGetById(UserModel),
};

module.exports = UserService;