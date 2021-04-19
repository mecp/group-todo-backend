const Router = require('express').Router;
const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

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

const controllers = {
  create(req, res) {
    return Todo.create(req.body)
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },

  listForProject(req, res) {
    return Todo.findAll({
      where: {
        projectId: req.params.projectId,
      },
      ...commonIncludeConfig,
    })
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Todo.findAll({ ...commonIncludeConfig })
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Todo.findById(req.params.todoId, {
      include: [
        {
          model: TodoItem,
          as: 'todoItems',
        },
      ],
    })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Todo.findById(req.params.todoId, {
      include: [
        {
          model: TodoItem,
          as: 'todoItems',
        },
      ],
    })
      .then(todo => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .update({
            title: req.body.title || todo.title,
          })
          .then(() => res.status(200).send(todo))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Todo.findById(req.params.todoId)
      .then(todo => {
        if (!todo) {
          return res.status(400).send({
            message: 'Todo Not Found',
          });
        }
        return todo
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};

const makeRoutes = () => {
  const router = new Router();

  router.post('/', controllers.create);
  router.get('/', controllers.list);
  router.get('/:projectId', controllers.listForProject);
  router.get('/:todoId', controllers.retrieve);
  router.put('/:todoId', controllers.update);
  router.delete('/', controllers.delete);

  return router;
};

module.exports = makeRoutes;
