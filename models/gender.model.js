module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define(
    "gender",
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

  Gender.associate = (models) => {
    Gender.hasMany(models.customer, {
      foreignKey: "gender_id",
      as: "customers",
    });
    Gender.hasMany(models.human_category, {
      foreignKey: "gender_id",
      as: "human_categories",
    });
  };

  return Gender;
};
