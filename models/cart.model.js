module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    "cart",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      finishedAt: {
        type: DataTypes.DATE,
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

  Cart.associate = (models) => {
    Cart.belongsTo(models.customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
    Cart.hasMany(models.cart_item, {
      foreignKey: "cart_id",
      as: "cart_items",
    });
    Cart.hasMany(models.booking, {
      foreignKey: "cart_id",
      as: "bookings",
    });
    Cart.belongsTo(models.ticket_status, {
      foreignKey: "status_id",
      as: "status",
    });
  };

  return Cart;
};
