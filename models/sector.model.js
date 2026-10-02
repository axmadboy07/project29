module.exports = (sequelize, DataTypes) => {
  const Sector = sequelize.define(
    "sector",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sector_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Sector.associate = (models) => {
    Sector.hasMany(models.seat, {
      foreignKey: "sector_id",
      as: "seats",
    });
  };

  return Sector;
};
