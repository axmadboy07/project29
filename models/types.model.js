module.exports = (sequelize, DataTypes) => {
  const Types = sequelize.define(
    "types",
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

  Types.associate = (models) => {
    Types.hasMany(models.venue_types, {
      foreignKey: "type_id",
      as: "venue_types",
    });
  };

  return Types;
};
