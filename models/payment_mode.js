module.exports = (sequelize, DataTypes) => {
  const payment_mode = sequelize.define(
    "payment_mode",
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );
  return payment_mode;
};
