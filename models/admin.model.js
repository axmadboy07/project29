const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "admin",
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
      login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      hashed_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      is_creator: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      hashed_refresh_token: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Admin.beforeSave(async (admin) => {
    if (admin.changed("hashed_password")) {
      admin.hashed_password = await bcrypt.hash(admin.hashed_password, 10);
    }
  });

  return Admin;
};
