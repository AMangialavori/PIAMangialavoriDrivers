const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // sequelize.query("CREATE SEQUENCE IF NOT EXISTS driver_id_seq START 508");

  sequelize.define("Driver", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      // defaultValue: () => {
      //   return sequelize.literal("nextval('driver_id_seq')");
      // },
    },
    forename: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    dob: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
