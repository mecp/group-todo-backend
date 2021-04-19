module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Team.associate = (models) => {
    Team.belongsTo(models.Organization);
  };
  return Team;
};
