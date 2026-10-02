module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define(
    "seat",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sector_id: {
        type: DataTypes.INTEGER,
      },
      row_number: {
        type: DataTypes.INTEGER,
      },
      number: {
        type: DataTypes.INTEGER,
      },
      venue_id: {
        type: DataTypes.INTEGER,
      },
      seat_type_id: {
        type: DataTypes.INTEGER,
      },
      location_in_schema: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Seat.associate = (models) => {
    Seat.belongsTo(models.sector, {
      foreignKey: "sector_id",
      as: "sector",
    });
    Seat.belongsTo(models.venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    Seat.belongsTo(models.seat_type, {
      foreignKey: "seat_type_id",
      as: "seat_type",
    });
    Seat.hasMany(models.ticket, {
      foreignKey: "seat_id",
      as: "tickets",
    });
  };

  return Seat;
};
