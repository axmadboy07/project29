module.exports = (sequelize, DataTypes) => {
  const Event_type = sequelize.define(
    "event_type",
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
      parent_event_type_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Event_type.associate = (models) => {
    Event_type.belongsTo(models.event_type, {
      foreignKey: "parent_event_type_id",
      as: "parent",
    });
    Event_type.hasMany(models.event_type, {
      foreignKey: "parent_event_type_id",
      as: "sub_types",
    });
    Event_type.hasMany(models.event, {
      foreignKey: "event_type_id",
      as: "events",
    });
  };

  return Event_type;
};
