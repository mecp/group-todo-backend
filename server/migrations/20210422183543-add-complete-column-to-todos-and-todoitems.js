// could use faker.js to generate fake data
const thenChain = promiseFactorys =>
  promiseFactorys.reduce((promise, factory) => promise.then(factory), Promise.resolve());

module.exports = {
  up: (queryInterface, Sequelize) =>
    thenChain([
      () =>
        queryInterface.addColumn('Todos', 'complete', {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        }),
      () => queryInterface.renameColumn('TodoItems', 'content', 'title'),
    ]),
  down: (queryInterface, Sequelize) =>
    thenChain([
      () => queryInterface.renameColumn('TodoItems', 'title', 'content'),
      () => queryInterface.removeColumn('Todos', 'complete'),
    ]),
};
