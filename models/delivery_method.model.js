module.exports = (sequelize, DataTypes) => {
  const Delivery_method = sequelize.define(
    "delivery_method",
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

  Delivery_method.associate = (models) => {
    Delivery_method.hasMany(models.booking, {
      foreignKey: "delivery_method_id",
      as: "bookings",
    });
  };

  return Delivery_method;
};
