module.exports = (sequelize, DataTypes) => {
  const Discount = sequelize.define(
    "discount",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      discount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      finish_date: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Discount.associate = (models) => {
    Discount.hasMany(models.booking, {
      foreignKey: "discount_id",
      as: "bookings",
    });
  };

  return Discount;
};
