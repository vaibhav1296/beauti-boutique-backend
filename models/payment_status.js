module.exports = (sequelize, DataTypes) => {
  const payment_status = sequelize.define(
    "payment_status",
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );
  return payment_status;
};
