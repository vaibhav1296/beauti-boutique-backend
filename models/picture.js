module.exports = (sequelize, DataTypes) => {
  const picture = sequelize.define(
    "picture",
    {
      url: DataTypes.STRING,
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );
  return picture;
};
