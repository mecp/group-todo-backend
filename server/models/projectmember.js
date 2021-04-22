module.exports = (sequelize, DataTypes) => {
    const ProjectMember = sequelize.define('ProjectMember', {
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      teamId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    });
    ProjectMember.associate = (models) => {
      // associations here
    };
    return ProjectMember;
  };
  