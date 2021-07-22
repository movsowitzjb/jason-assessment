'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Org extends Model {
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Org.associate = function(models) {
  // associations can be defined here
  Org.hasMany(models.Site)
  Org.belongsTo(models.Group,{foreignKey:'userId'})
};
      // define association here
    }
  };
  Org.init({
    name:{
      allowNull:false,
      type:DataTypes.STRING,

    } ,
    siteId:{
      allowNull:false,
      type:DataTypes.INTEGER
    }

  }, {
    sequelize,
    modelName: 'Org',
  });
  return Org;
};