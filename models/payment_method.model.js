module.exports = (sequelize, DataTypes) => {
  const Payment_method = sequelize.define(
    "payment_method",
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

  Payment_method.associate = (models) => {
    Payment_method.hasMany(models.booking, {
      foreignKey: "payment_method_id",
      as: "bookings",
    });
  };

  return Payment_method;
};
