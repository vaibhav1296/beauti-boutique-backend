module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "gender",
      [
        {
          name: "FEMALE",
        },
        {
          name: "MALE",
        },
        {
          name: "LGBTQ",
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("gender", null, {});
  },
};
