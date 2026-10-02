module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "region",
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
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Region.associate = (models) => {
    Region.hasMany(models.district, {
      foreignKey: "region_id",
      as: "districts",
    });
    Region.hasMany(models.venue, {
      foreignKey: "region_id",
      as: "venues",
    });
    Region.hasMany(models.customer_address, {
      foreignKey: "region_id",
      as: "customer_addresses",
    });
  };

  return Region;
};
