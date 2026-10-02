module.exports = (sequelize, DataTypes) => {
  const Customer_card = sequelize.define(
    "customer_card",
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
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.STRING(4),
      },
      month: {
        type: DataTypes.STRING(2),
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      is_main: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Customer_card.associate = (models) => {
    Customer_card.belongsTo(models.customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
  };

  return Customer_card;
};
