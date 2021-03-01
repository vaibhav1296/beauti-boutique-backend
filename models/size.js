module.exports = (sequelize, DataTypes) => {
  const size = sequelize.define(
    "size",
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );
  return size;
};
