module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "profile_status",
      [
        {
          name: "VERIFIED",
        },
        {
          name: "NOT VERIFIED",
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("profile_status", null, {});
  },
};
