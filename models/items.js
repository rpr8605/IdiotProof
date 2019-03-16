module.exports = function (sequelize, DataTypes) {
  let Items = sequelize.define("Items", {
    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING
    },
    expiration_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT
    },
    warranty_valid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    phone_number: {
      type: DataTypes.BIGINT
    }
  });
  return Items;
}


