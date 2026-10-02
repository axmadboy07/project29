module.exports = (sequelize, DataTypes) => {
  const Customer_address = sequelize.define(
    "customer_address",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      region_id: {
        type: DataTypes.INTEGER,
      },
      district_id: {
        type: DataTypes.INTEGER,
      },
      street: {
        type: DataTypes.STRING,
      },
      house: {
        type: DataTypes.STRING,
      },
      flat_id: {
        type: DataTypes.INTEGER,
      },
      location: {
        type: DataTypes.STRING,
      },
      post_index: {
        type: DataTypes.STRING,
      },
      info: {
        type: DataTypes.TEXT,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Customer_address.associate = (models) => {
    Customer_address.belongsTo(models.customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
    Customer_address.belongsTo(models.region, {
      foreignKey: "region_id",
      as: "region",
    });
    Customer_address.belongsTo(models.district, {
      foreignKey: "district_id",
      as: "district",
    });
    Customer_address.belongsTo(models.flat, {
      foreignKey: "flat_id",
      as: "flat",
    });
  };

  return Customer_address;
};
