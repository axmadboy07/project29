module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    "event",
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
      photo: {
        type: DataTypes.STRING,
      },
      start_date: {
        type: DataTypes.DATEONLY,
      },
      start_time: {
        type: DataTypes.STRING,
      },
      finish_date: {
        type: DataTypes.DATEONLY,
      },
      finish_time: {
        type: DataTypes.STRING,
      },
      info: {
        type: DataTypes.TEXT,
      },
      event_type_id: {
        type: DataTypes.INTEGER,
      },
      human_category_id: {
        type: DataTypes.INTEGER,
      },
      venue_id: {
        type: DataTypes.INTEGER,
      },
      lang_id: {
        type: DataTypes.INTEGER,
      },
      release_date: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  Event.associate = (models) => {
    Event.belongsTo(models.event_type, {
      foreignKey: "event_type_id",
      as: "event_type",
    });
    Event.belongsTo(models.human_category, {
      foreignKey: "human_category_id",
      as: "human_category",
    });
    Event.belongsTo(models.venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    Event.belongsTo(models.lang, {
      foreignKey: "lang_id",
      as: "language",
    });
    Event.hasMany(models.ticket, {
      foreignKey: "event_id",
      as: "tickets",
    });
  };

  return Event;
};
