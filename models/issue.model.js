'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.issue.hasMany(models.developer, {
        foreignKey: 'issueId',
        sourceKey: 'id'
      })
    }
  };
  Issue.init({
    issueId: DataTypes.INTEGER,
    githubId: DataTypes.STRING,
    state: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'issue',
  });
  return Issue;
};