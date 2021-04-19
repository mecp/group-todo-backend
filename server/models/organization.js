module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Organization.associate = (models) => {
    // put associations here
  };
  return Organization;
};
