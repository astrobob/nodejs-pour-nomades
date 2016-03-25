/**
 * Created by leojpod on 2/29/16.
 */

module.exports = {
  normalizeUser: function (user) {
    return {
      type: 'users',
      id: user.id.toString(),
      attributes: {
        name: user.name,
        email: user.email
      }
    };
  },

  normalizePool: function (pool) {
    return {
      type: 'pools',
      id: pool.id.toString(),
      attributes: {
        title: pool.title,
        questions: pool.questions
      },
      relationships: {
        author: {
          data: {
            type: 'users',
            id: pool.author.id.toString()
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
