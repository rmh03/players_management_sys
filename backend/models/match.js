module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define("Match", {
    MatchID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Date: { type: DataTypes.DATE },
    Team1ID: { type: DataTypes.INTEGER },
    Team2ID: { type: DataTypes.INTEGER },
    WinnerTeamID: { type: DataTypes.INTEGER }
  }, {
    timestamps: false // Disable createdAt and updatedAt
  });

  Match.associate = (models) => {
    Match.belongsTo(models.Team, { as: "Team1", foreignKey: "Team1ID" });
    Match.belongsTo(models.Team, { as: "Team2", foreignKey: "Team2ID" });
    Match.belongsTo(models.Team, { as: "Winner", foreignKey: "WinnerTeamID" });
  };

  return Match;
};
