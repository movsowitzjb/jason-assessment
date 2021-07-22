'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Site extends Model {
   
    static associate(models) {
      Site.associate = function(models) {
  
  Site.belongsTo(models.Org, { foreignKey: 'orgId' });
};
     
    }
  };
  Site.init({
    name:{
      allowNull:false, 
      type:DataTypes.STRING,
    },
    location:{
      allowNull:false,
      type:DataTypes.FLOAT,
    }
  }, {
    sequelize,
    modelName: 'Site',
  });
  return Site;
};