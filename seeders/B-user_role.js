module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user_role",
      [
        {
          name: "ADMIN",
        },
        {
          name: "CUSTOMER",
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user_role", null, {});
  },
};
