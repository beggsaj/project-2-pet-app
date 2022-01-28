const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Biscut is a good boy',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Aww he is so cute.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'I want one OMGeez!!!',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Thats a pretty pupper',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'My doggo is way better bro.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'I"m kinda a cat person actually',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Beautiful',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'That"s a shiny coat',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Are you sure thats a dog?',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Wanna meet up and have a doggie playdate?',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'He looks like the best boi ever',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'That"s a chonky boy',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Chiuhaha"s bark to mush for me',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'Aww',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Soooooo cutttttteeeeeeee',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Precious!!!',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:
      'Look"s like something out of lord of the rings!!',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'She"s so tiny',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'That"s a silly doggo',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'Yuck',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'Cute af',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'That"s so adorable',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Chonky',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:
      'I want',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'She cute',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Just look at em',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'You need a haircut you big silly',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Lol',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Bath time',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Decent',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Seriously',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Fabulous',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Aww seepy boi',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Lay off the kibble big chungus',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Doggo',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Pretty eye"s',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'First',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Nice',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'What a stinker',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'What do yo feed it?',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'What a cutie',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Is that a blue healer?',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Great danes don"t live long',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Keep that sucker on a leash',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'That thing looks feral',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Cute doggo',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'What a beautiful breed',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:
      'That thing looks riddeled in fleas',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'Ewww whats that',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: '10 out of 10 would pet',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
