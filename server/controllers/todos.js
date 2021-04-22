const Router = require('express').Router;
const Todo = require('../models').Todo;

const { TodoService } = require('../services');

const dispatchResponse = (servicePromise, res, successStatusCode, errorStatusCode) =>
  servicePromise
    .then(result => res.status(successStatusCode).send(result))
    .catch(error => res.status(errorStatusCode).send(error));

const controllers = {
  create: (req, res) => dispatchResponse(TodoService.add(req.body), res, 201, 400),
  list: (req, res) => dispatchResponse(TodoService.getAllForUser(1), res, 200, 400),
  retrieve: (req, res) => dispatchResponse(TodoService.getById(req.params.todoId), res, 200, 400),
  update: (req, res) => dispatchResponse(TodoService.update(req.params.todoId, req.body), res, 200, 400),
  destroy: (req, res) => dispatchResponse(TodoService.delete(req.params.todoId), res, 204, 400)
};

const makeRoutes = () => {
  const router = new Router();

  router.post('/', controllers.create);
  router.get('/', controllers.list);
  router.get('/:todoId', controllers.retrieve);
  router.put('/:todoId', controllers.update);
  router.delete('/:todoId', controllers.destroy);

  return router;
};

module.exports = makeRoutes;
