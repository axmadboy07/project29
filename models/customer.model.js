const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "customer",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      hashed_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      birth_date: {
        type: DataTypes.DATEONLY,
      },
      gender_id: {
        type: DataTypes.INTEGER,
      },
      lang_id: {
        type: DataTypes.INTEGER,
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

  Customer.beforeSave(async (customer) => {
    if (customer.changed("hashed_password")) {
      customer.hashed_password = await bcrypt.hash(customer.hashed_password, 10);
    }
  });

  Customer.associate = (models) => {
    Customer.belongsTo(models.gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
    Customer.belongsTo(models.lang, {
      foreignKey: "lang_id",
      as: "language",
    });
    Customer.hasMany(models.customer_card, {
      foreignKey: "customer_id",
      as: "customer_cards",
    });
    Customer.hasMany(models.customer_address, {
      foreignKey: "customer_id",
      as: "customer_addresses",
    });
    Customer.hasMany(models.cart, {
      foreignKey: "customer_id",
      as: "carts",
    });
  };

  return Customer;
};
