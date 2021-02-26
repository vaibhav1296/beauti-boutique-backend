module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("app2user_role", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      app_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "app",
          key: "id",
        },
      },
      user_role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "user_role",
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
    return queryInterface.dropTable("app2user_role");
  },
};
