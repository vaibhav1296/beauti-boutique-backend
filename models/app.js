const { DATE } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const app = sequelize.define(
    "app",
    {
      name: DataTypes.STRING,
      token: DataTypes.UUID,
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );
  app.associate = function (models) {
    // any kind of association or relation goes here
  };
  return app;
};
