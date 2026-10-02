module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    "ticket",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      seat_id: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      service_fee: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
      },
      status_id: {
        type: DataTypes.INTEGER,
      },
      ticket_type_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Ticket.associate = (models) => {
    Ticket.belongsTo(models.event, {
      foreignKey: "event_id",
      as: "event",
    });
    Ticket.belongsTo(models.seat, {
      foreignKey: "seat_id",
      as: "seat",
    });
    Ticket.belongsTo(models.ticket_status, {
      foreignKey: "status_id",
      as: "status",
    });
    Ticket.belongsTo(models.ticket_type, {
      foreignKey: "ticket_type_id",
      as: "ticket_type",
    });
    Ticket.hasMany(models.cart_item, {
      foreignKey: "ticket_id",
      as: "cart_items",
    });
  };

  return Ticket;
};
