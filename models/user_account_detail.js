module.exports = (sequelize, DataTypes) => {
  const user_account_detail = sequelize.define(
    "user_account_detail",
    {
      userId: {
        type: DataTypes.UUID,
        field: "user_id",
      },
      accountNumber: {
        type: DataTypes.STRING,
        field: "account_number",
      },
      ifscCode: {
        type: DataTypes.STRING,
        field: "ifsc_code",
      },
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );
  user_account_detail.associate = function (models) {
    user_account_detail.belongsTo(models.user, {
      foreignKey: "userId",
    });
  };
  return user_account_detail;
};
