module.exports = (sequelize, DataTypes) => {
  const Seat_type = sequelize.define(
    "seat_type",
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

  Seat_type.associate = (models) => {
    Seat_type.hasMany(models.seat, {
      foreignKey: "seat_type_id",
      as: "seats",
    });
  };

  return Seat_type;
};
