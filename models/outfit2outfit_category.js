module.exports = (sequelize, DataTypes) => {
  const outfit2outfit_category = sequelize.define(
    "outfit2outfit_category",
    {
      outfitId: {
        type: DataTypes.INTEGER,
        field: "outfit_id",
      },
      outfitCategoryId: {
        type: DataTypes.INTEGER,
        field: "outfit_category_id",
      },
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );

  outfit2outfit_category.associate = function (models) {
    outfit2outfit_category.belongsTo(models.outfit, {
      foreignKey: "outfitId",
    });
    outfit2outfit_category.belongsTo(models.outfit_category, {
      foreignKey: "outfitCategoryId",
    });
  };
  return outfit2outfit_category;
};
