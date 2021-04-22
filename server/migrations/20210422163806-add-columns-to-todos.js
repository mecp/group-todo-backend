// could use faker.js to generate fake data
const thenChain = promiseFactorys =>
  promiseFactorys.reduce((promise, factory) => promise.then(factory), Promise.resolve());

module.exports = {
  up: (queryInterface, Sequelize) =>
    thenChain([
      () =>
        queryInterface.addColumn('Todos', 'description', {
          type: Sequelize.STRING,
          allowNull: true,
        }),
      () =>
        queryInterface.addColumn('Todos', 'projectId', {
          type: Sequelize.INTEGER,
          allowNull: false,
        }),
      () =>
        queryInterface.addColumn('Todos', 'createdBy', {
          type: Sequelize.INTEGER,
          allowNull: false,
        }),
    ]),
  down: (queryInterface, Sequelize) =>
    thenChain([
      () => queryInterface.removeColumn('Todos', 'createdBy'),
      () => queryInterface.removeColumn('Todos', 'projectId'),
      () => queryInterface.removeColumn('Users', 'description'),
    ]),
};
