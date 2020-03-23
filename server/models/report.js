'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Report', {
    cases: DataTypes.INTEGER,
    CountryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {});
  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.Country);
  };
  return Report;
};