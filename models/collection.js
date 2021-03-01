module.exports = (sequelize, DataTypes) => {
  const collection = sequelize.define(
    "collection",
    {
      outfit2categoryId: {
        type: DataTypes.INTEGER,
        field: "outfit2category_id",
      },
      price: DataTypes.DECIMAL(10, 2),
      availablePiece: {
        type: DataTypes.INTEGER,
        field: "available_piece",
      },
      color: DataTypes.STRING,
      isAvailable: {
        type: DataTypes.BOOLEAN,
        field: "is_available",
      },
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );

  collection.associate = function (models) {
    collection.belongsTo(models.outfit2outfit_category, {
      foreignKey: "outfit2categoryId",
    });
  };
  return collection;
};
