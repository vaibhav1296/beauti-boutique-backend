module.exports = (sequelize, DataTypes) => {
  const bucket_status = sequelize.define(
    "bucket_size",
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );

  return bucket_status;
};
