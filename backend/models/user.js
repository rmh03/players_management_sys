const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Coach",
      }
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: false // Disable createdAt and updatedAt
    }
  );

  return User;
};