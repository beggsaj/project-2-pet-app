const { Post } = require('../models');

const postdata = [
  {
    title: 'This is the best boy.',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 10
  },
  {
    title: 'Why my dogs better than yours.',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 8
  },
  {
    title: 'He could be on paw patrol',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 1
  },
  {
    title: 'Does any one know my dogs breed?',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 4
  },
  {
    title: 'How can I tell if my dog is pureblood?',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 7
  },
  {
    title: 'I caught fleas.',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 4
  },
  {
    title: 'How do I get rid of fleas?',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 1
  },
  {
    title: 'Who has the cutest breed?',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 1
  },
  {
    title: 'Is this a mutt?',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 9
  },
  {
    title: 'How to tell if your mutt has fleas?',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 5
  },
  {
    title: 'Looking for fellow breeders.',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 3
  },
  {
    title: 'Why do people hate my pitbull?',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 10
  },
  {
    title: 'Look at my dog.',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 8
  },
  {
    title: 'Any single doggo lovers out there?',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 3
  },
  {
    title: 'How to train your doggy.',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 3
  },
  {
    title:
      'Why does he chase his tail?',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 7
  },
  {
    title: 'Fifty shades of fur a breeding guide for fellow dog breeders.',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 6
  },
  {
    title: 'Where can I find dog mints?',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 4
  },
  {
    title: 'Why is my dogs breath bad',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 6
  },
  {
    title: 'How to get rid of fleas',
    post_url: '/uploads/pexels-helena-lopes-2253275.jpg',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
