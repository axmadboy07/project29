module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define(
    "venue",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      site: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      schema: {
        type: DataTypes.STRING,
      },
      region_id: {
        type: DataTypes.INTEGER,
      },
      district_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Venue.associate = (models) => {
    Venue.belongsTo(models.region, {
      foreignKey: "region_id",
      as: "region",
    });
    Venue.belongsTo(models.district, {
      foreignKey: "district_id",
      as: "district",
    });
    Venue.hasMany(models.venue_photo, {
      foreignKey: "venue_id",
      as: "photos",
    });
    Venue.hasMany(models.venue_types, {
      foreignKey: "venue_id",
      as: "venue_types",
    });
    Venue.hasMany(models.seat, {
      foreignKey: "venue_id",
      as: "seats",
    });
    Venue.hasMany(models.event, {
      foreignKey: "venue_id",
      as: "events",
    });
  };

  return Venue;
};
