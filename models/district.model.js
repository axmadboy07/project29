module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define(
    "district",
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
      region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  District.associate = (models) => {
    District.belongsTo(models.region, {
      foreignKey: "region_id",
      as: "region",
    });
    District.hasMany(models.venue, {
      foreignKey: "district_id",
      as: "venues",
    });
    District.hasMany(models.customer_address, {
      foreignKey: "district_id",
      as: "customer_addresses",
    });
  };

  return District;
};
