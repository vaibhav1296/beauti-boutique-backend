module.exports = (sequelize, DataTypes) => {
  const collection2picture = sequelize.define(
    "collection2picture",
    {
      collectionId: {
        type: DataTypes.INTEGER,
        field: "collection_id",
      },
      pictureId: {
        type: DataTypes.INTEGER,
        field: "picture_id",
      },
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );
  collection2picture.associate = function (models) {
    collection2picture.belongsTo(models.collection, {
      foreignKey: "collectionId",
    });
    collection2picture.belongsTo(models.picture, {
      foreignKey: "pictureId",
    });
  };

  return collection2picture;
};
