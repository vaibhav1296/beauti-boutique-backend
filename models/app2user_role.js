module.exports = (sequelize, DataTypes) => {
  const app2user_role = sequelize.define(
    "app2user_role",
    {
      appId: {
        type: DataTypes.INTEGER,
        field: "app_id",
      },
      userRoleId: {
        type: DataTypes.INTEGER,
        field: "user_role_id",
      },
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );

  app2user_role.associate = function (models) {
    app2user_role.belongsTo(models.app, {
      foreignKey: "appId",
    });
    app2user_role.belongsTo(models.user_role, {
      foreignKey: "userRoleId",
    });
  };
  return app2user_role;
};
