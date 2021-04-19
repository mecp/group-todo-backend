module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Project.associate = (models) => {
    Project.belongsTo(models.Organization);
  };
  return Project;
};
