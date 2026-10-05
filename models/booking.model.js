module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "booking",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      finished: {
        type: DataTypes.DATE,
      },
      payment_method_id: {
        type: DataTypes.INTEGER,
      },
      delivery_method_id: {
        type: DataTypes.INTEGER,
      },
      discount_id: {
        type: DataTypes.INTEGER,
      },
      status_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Booking.associate = (models) => {
    Booking.belongsTo(models.cart, {
      foreignKey: "cart_id",
      as: "cart",
    });
    Booking.belongsTo(models.payment_method, {
      foreignKey: "payment_method_id",
      as: "payment_method",
    });
    Booking.belongsTo(models.delivery_method, {
      foreignKey: "delivery_method_id",
      as: "delivery_method",
    });
    Booking.belongsTo(models.discount, {
      foreignKey: "discount_id",
      as: "discount",
    });
    Booking.belongsTo(models.ticket_status, {
      foreignKey: "status_id",
      as: "status",
    });
  };

  return Booking;
};
