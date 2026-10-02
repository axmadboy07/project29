module.exports = (sequelize, DataTypes) => {
  const Venue_photo = sequelize.define(
    "venue_photo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      venue_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Venue_photo.associate = (models) => {
    Venue_photo.belongsTo(models.venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
  };

  return Venue_photo;
};
