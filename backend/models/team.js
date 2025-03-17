module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define("Team", {
    TeamID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    TeamName: { type: DataTypes.STRING, allowNull: false },
    Coach: { type: DataTypes.STRING },
    CaptainID: { type: DataTypes.INTEGER }
  }, {
    timestamps: false // Disable createdAt and updatedAt
  });

  Team.associate = (models) => {
    Team.hasMany(models.Player, { foreignKey: "TeamID" });
  };

  return Team;
};
