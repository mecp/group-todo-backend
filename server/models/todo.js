module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });
  Todo.associate = (models) => {
    Todo.belongsTo(models.Project, {
      foreignKey: 'projectId'
    });
    Todo.belongsTo(models.User, {
      foreignKey: 'createdBy'
    });
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    });
  };
  return Todo;
};
