module.exports = (sequelize, DataTypes) => {
  const Ticket_type = sequelize.define(
    "ticket_type",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ticket_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Ticket_type.associate = (models) => {
    Ticket_type.hasMany(models.ticket, {
      foreignKey: "ticket_type_id",
      as: "tickets",
    });
  };

  return Ticket_type;
};
