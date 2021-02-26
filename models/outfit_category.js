module.exports = (sequelize, DataTypes) => {
  const outfit_category = sequelize.define(
    "outfit_category",
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );
  return outfit_category;
};
