/**
 * Created by leojpod on 3/2/16.
 */

var jsonapi = require('jsonapi-serializer');
var Serializer = jsonapi.Serializer;

var UserSerializer = new Serializer('user', {
  id: '_id',
  attributes: ['name', 'email']/*,
  relationships: {
    pools: {
      serializer: 'Pool',
      relationship: Relationships.hasMany('userId')
    }
  }*/
});

module.exports = UserSerializer;
