module.exports = (sequelize, DataTypes) => {
  const FieldingPerformance = sequelize.define("FieldingPerformance", {
    PlayerID: { type: DataTypes.INTEGER, primaryKey: true },
    MatchesPlayed: { type: DataTypes.INTEGER },
    RunOuts: { type: DataTypes.INTEGER },
    Catches: { type: DataTypes.INTEGER },
    Stumpings: { type: DataTypes.INTEGER }
  }, {
    timestamps: false // Disable createdAt and updatedAt
  });

  FieldingPerformance.associate = (models) => {
    FieldingPerformance.belongsTo(models.Player, { foreignKey: "PlayerID" });
  };

  return FieldingPerformance;
};
