// could use faker.js to generate fake data
const thenChain = promiseFactorys =>
  promiseFactorys.reduce((promise, factory) => promise.then(factory), Promise.resolve());

module.exports = {
  up: (queryInterface, Sequelize) =>
    thenChain([
      () =>
        queryInterface.bulkInsert('Users', [
          {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@example.com',
            passwordHash: 'dummy-hash',
            salt: 'dummy-salt',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]),
      () =>
        queryInterface.bulkInsert('Projects', [
          {
            id: 1,
            name: 'Dummy Project 1',
            organizationId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            name: 'Dummy Project 2',
            organizationId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]),
      () =>
        queryInterface.bulkInsert('ProjectMembers', [
          {
            projectId: 1,
            userId: 1,
            teamId: null,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            projectId: 2,
            userId: 2,
            teamId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]),
    ]),
  down: (queryInterface, Sequelize) =>
    thenChain([
      () => queryInterface.bulkDelete('Users', null, {}),
      () => queryInterface.bulkDelete('Projects', null, {}),
      () => queryInterface.bulkDelete('ProjectMembers', null, {}),
    ]),
};
