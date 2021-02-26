module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("outfit2outfit_category", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      outfit_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "outfit",
          key: "id",
        },
      },
      outfit_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "outfit_category",
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
    return queryInterface.dropTable("outfit2outfit_category");
  },
};
