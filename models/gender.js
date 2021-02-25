module.exports = (sequelize, DataTypes) => {
  const gender = sequelize.define(
    "gender",
    {
      name: DataTypes.STRING,
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );
  gender.associate = function (models) {
    //any kind of association goes here
  };
  return gender;
};
