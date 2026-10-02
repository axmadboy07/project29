module.exports = (sequelize, DataTypes) => {
  const Ticket_status = sequelize.define(
    "ticket_status",
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

  Ticket_status.associate = (models) => {
    Ticket_status.hasMany(models.ticket, {
      foreignKey: "status_id",
      as: "tickets",
    });
  };

  return Ticket_status;
};
