module.exports = (sequelize, DataTypes) => {
  const outfit = sequelize.define(
    "outfit",
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );

  return outfit;
};
