const TodoModel = require('../models').Todo;
const TodoItem = require('../models').TodoItem;
const ProjectMemberModel = require('../models').ProjectMember;
const BaseServiceFactory = require('./common').BaseServiceFactory;
const UserService = require('./user');

const commonIncludeConfig = {
  include: [
    {
      model: TodoItem,
      as: 'todoItems',
    },
  ],
  order: [
    ['createdAt', 'DESC'],
    [{ model: TodoItem, as: 'todoItems' }, 'createdAt', 'ASC'],
  ],
};

const TodoService = {
  add: BaseServiceFactory.makeAdd(TodoModel),
  update: BaseServiceFactory.makeUpdate(TodoModel),
  archive: BaseServiceFactory.makeArchive(TodoModel),
  delete: BaseServiceFactory.makeDelete(TodoModel),
  getById: BaseServiceFactory.makeGetById(TodoModel, commonIncludeConfig),
  getAllForUser: async (userId) => {
    // check if the user exists
    const user = await UserService.getById(userId);
  
    // now that user exists
    const userProjects = await ProjectMemberModel.findAll({
      where: {
        userId
      },
      attributes: ['projectId']
    });

    console.log(userProjects.map(({ projectId }) => projectId));

    if (!userProjects || !userProjects.length) {
      return [];
    }

    return TodoModel.findAll({
      where: {
        projectId: userProjects.map(({ projectId }) => projectId)
      }
    });
  },
  addTodoItem: async (todoId, payload) => {
    // check if the todo exists
    const todo = await TodoService.getById(todoId);

    return TodoItem.create({
      ...payload,
      todoId
    });
  }
};

module.exports = TodoService;