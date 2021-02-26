module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      genderId: {
        type: DataTypes.INTEGER,
        field: "gender_id",
      },
      phone: DataTypes.STRING,
      isEmailVerified: {
        type: DataTypes.BOOLEAN,
        field: "is_email_verified",
      },
      isPhoneVerified: {
        type: DataTypes.BOOLEAN,
        field: "is_phone_verified",
      },
      pictureUrl: {
        type: DataTypes.STRING,
        field: "picture_url",
      },
      userRoleId: {
        type: DataTypes.INTEGER,
        field: "user_role_id",
      },
      profileStatusId: {
        type: DataTypes.INTEGER,
        field: "profile_status_id",
      },
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );

  user.associate = function (models) {
    user.belongsTo(models.gender, {
      foreignKey: "genderId",
    });
    user.belongsTo(models.user_role, {
      foreignKey: "userRoleId",
    });
    user.belongsTo(models.profile_status, {
      foreignKey: "profileStatusId",
    });
  };
  return user;
};
