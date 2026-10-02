module.exports = (sequelize, DataTypes) => {
  const Flat = sequelize.define(
    "flat",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      etaj: {
        type: DataTypes.INTEGER,
      },
      condition: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Flat.associate = (models) => {
    Flat.hasMany(models.customer_address, {
      foreignKey: "flat_id",
      as: "customer_addresses",
    });
  };

  return Flat;
};
