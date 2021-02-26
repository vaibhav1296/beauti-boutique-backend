module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("user", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "gender",
          key: "id",
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_email_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      is_phone_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      picture_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "user_role",
          key: "id",
        },
      },
      profile_status_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "profile_status",
          key: "id",
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP(3)"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user");
  },
};
