const BaseServiceFactory = {
  makeGetAllForUser (sequelizeModel) { 
    return (userId) => {

    }
  },
  makeGetAll (sequelizeModel) { 
    return (options) => sequelizeModel.findAll(options);
  },
  makeAdd(sequelizeModel) {
    return (payload) => sequelizeModel.create(payload);
  },
  makeUpdate(sequelizeModel) {
    return async (entityId, payload) => {
      const entity = await BaseServiceFactory.makeGetById(sequelizeModel)(entityId);

      return entity.update(payload);
    }
  },
  makeGetById(sequelizeModel, sequelizeOptions) {
    return async (entityId) => {
      const entity = await sequelizeModel.findById(entityId, sequelizeOptions);
      
      if (!entity) {
        throw new Error(`Record does not exist for id ${entityId}`);
      }

      return entity;
    }
  },
  makeArchive(entityId) {
    
  },
  makeDelete(sequelizeModel) {
    return async (entityId) => {
      const entity = await sequelizeModel.findById(entityId);
      
      if (!entity) {
        throw new Error(`Record does not exist for id ${entityId}`);
      }

      await entity.destroy();
    }
  }
};

module.exports = {
  BaseServiceFactory,
};
