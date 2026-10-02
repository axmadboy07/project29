module.exports = (sequelize, DataTypes) => {
  const Venue_types = sequelize.define(
    "venue_types",
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
      type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Venue_types.associate = (models) => {
    Venue_types.belongsTo(models.venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    Venue_types.belongsTo(models.types, {
      foreignKey: "type_id",
      as: "type",
    });
  };

  return Venue_types;
};
