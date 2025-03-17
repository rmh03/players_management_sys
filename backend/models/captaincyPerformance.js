module.exports = (sequelize, DataTypes) => {
    const CaptaincyPerformance = sequelize.define("CaptaincyPerformance", {
      PlayerID: { type: DataTypes.INTEGER, primaryKey: true },
      MatchesAsCaptain: { type: DataTypes.INTEGER },
      WinPercentage: { type: DataTypes.FLOAT },
      LossPercentage: { type: DataTypes.FLOAT }
    });
  
    CaptaincyPerformance.associate = (models) => {
      CaptaincyPerformance.belongsTo(models.Player, { foreignKey: "PlayerID" });
    };
  
    return CaptaincyPerformance;
  };
  