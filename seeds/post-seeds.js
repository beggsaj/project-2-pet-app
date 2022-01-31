const { Post } = require('../models');


const postdata = [
  {
    title: 'This is the best boy.',
    post_url: '../public/uploads/istockphoto-1221173454-612x612.jpg',
    user_id: 10
  },
  {
    title: 'Why my dogs better than yours.',
    post_url: '../public/uploads/istockphoto-1221173454-612x612.jpg',
    user_id: 8
  },
  {
    title: 'He could be on paw patrol',
    post_url: '../public/uploads/purdyGrass.jpg',
    user_id: 1
  },
  {
    title: 'Does any one know my dogs breed?',
    post_url: '../public/uploads/notToday.jpg',
    user_id: 4
  },
  {
    title: 'How can I tell if my dog is pureblood?',
    post_url: '../public/uploads/poms.jpg',
    user_id: 7
  },
  {
    title: 'I caught fleas.',
    post_url: '../public/uploads/bigEars.jpg',
    user_id: 4
  },
  {
    title: 'How do I get rid of fleas?',
    post_url: '../public/uploads/pug.jpg',
    user_id: 1
  },
  {
    title: 'Who has the cutest breed?',
    post_url: '../public/uploads/everythingRed.jpg',
    user_id: 1
  },
  {
    title: 'Is this a mutt?',
    post_url: '../public/uploads/outTheWindow.jpg',
    user_id: 9
  },
  {
    title: 'How to tell if your mutt has fleas?',
    post_url: '../public/uploads/dogHikeTreats.jpg',
    user_id: 5
  },
  {
    title: 'Looking for fellow breeders.',
    post_url: '../public/uploads/pupPups.jpg',
    user_id: 3
  },
  {
    title: 'Why do people hate my pitbull?',
    post_url: '../public/uploads/allSmiles.jpg',
    user_id: 10
  },
  {
    title: 'Look at my dog.',
    post_url: '../public/uploads/haircutBob.jpg',
    user_id: 8
  },
  {
    title: 'Any single doggo lovers out there?',
    post_url: '../public/uploads/istockphoto-1127312659-612x612.jpg',
    user_id: 3
  },
  {
    title: 'How to train your doggy.',
    post_url: '../public/uploads/jurassicDog.jpg',
    user_id: 3
  },
  {
    title:
      'Why does he chase his tail?',
    post_url: '../public/uploads/myStick.jpg',
    user_id: 7
  },
  {
    title: 'Fifty shades of fur a breeding guide for fellow dog breeders.',
    post_url: '../public/uploads/tiny&biggy.jpg',
    user_id: 6
  },
  {
    title: 'Where can I find dog mints?',
    post_url: '../public/uploads/jurassicDog.jpg',
    user_id: 4
  },
  {
    title: 'Why is my dogs breath bad',
    post_url: '../public/uploads/dogsBestNemesis.jpg',
    user_id: 6
  },
  {
    title: 'How to get rid of fleas',
    post_url: '../public/uploads/group.jpg',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
