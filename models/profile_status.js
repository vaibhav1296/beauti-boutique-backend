module.exports = (sequelize, DataTypes) => {
  const profile_status = sequelize.define(
    "profile_status",
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );

  return profile_status;
};
