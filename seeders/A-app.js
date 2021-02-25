const { v4: uuidv4 } = require("uuid");
const createToken = () => {
  return uuidv4();
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "app",
      [
        {
          name: "ADMIN_APP",
          token: createToken(),
        },
        {
          name: "USER_APP",
          token: createToken(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("app", null, {});
  },
};
