/**
 * Created by leojpod on 2/23/16.
 */
var users = {
  john: {
    id: 0,
    name: 'john',
    email: 'john@smith.com',
    password: 'password'
  },
  joe: {
    id: 3,
    name: 'joe',
    email: 'joe@smith.com',
    password: 'password'
  },
  anders: {
    id: 4,
    name: 'anders',
    email: 'anders@andersson.com',
    password: 'password'
  }
};

var pools = [
  {
    id: 1,
    userId: users.john.id,
    title: 'holy grail bridge',
    questions: [
      "what ... is your name?",
      "what ... is your quest?",
      "what ... is your favorite color?"
    ]
  },
  {
    id: 2,
    userId: users.john.id,
    title: 'was the movie great?',
    questions: [
      "How would you rate this movie's plot?",
      "How would you rate this movie's cast?",
      "How would you rate this movie's soundtracks?",
      "Was the movie great?"
    ]
  },
  {
    id: 5,
    userId: users.joe.id,
    title: 'was it a good game?',
    questions: [
      "How would you rate last night's game?",
      "What do you think of the game's speed?",
      "How would you rate the defence quality?",
      "Was the game too technical for you?",
      "some other question about the game..."
    ]
  }
];

module.exports.users = users;
module.exports.pools = pools;
