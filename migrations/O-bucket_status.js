module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("bucket_status", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable("bucket_status");
  },
};
