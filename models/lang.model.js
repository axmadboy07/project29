module.exports = (sequelize, DataTypes) => {
  const Lang = sequelize.define(
    "lang",
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

  Lang.associate = (models) => {
    Lang.hasMany(models.customer, {
      foreignKey: "lang_id",
      as: "customers",
    });
    Lang.hasMany(models.event, {
      foreignKey: "lang_id",
      as: "events",
    });
  };

  return Lang;
};
