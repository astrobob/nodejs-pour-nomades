/**
 * Created by leojpod on 2/29/16.
 */

module.exports = {
  normalizeUser: function (user) {
    return {
      type: 'user',
      id: user.id,
      attributes: {
        name: user.name,
        email: user.email
      }
    };
  },

  normalizePool: function (pool) {
    return {
      type: 'pool',
      id: pool.id,
      attributes: {
        title: pool.title,
        questions: pool.questions
      },
      relationships: {
        author: {
          data: {
            type: 'user',
            id: pool.userId
          }
        }
      }
    };
  },

  normalizeArray: function (collection, normalizerMethod) {
    var normalizedArray = [];
    for (var i = 0; i < collection.length; i ++) {
      normalizedArray.push(normalizerMethod(collection[i]));
    }
    return normalizedArray;
  }
};
