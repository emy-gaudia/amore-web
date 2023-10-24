module.exports = (sequelize, Sequelize) => {
  const Match = sequelize.define('match', {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    matched_user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  });

  return Match;
};