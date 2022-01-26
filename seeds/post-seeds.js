const { Post } = require('../models');

const postdata = [
  {
    title: 'This is the best boy.',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'Why my dogs better than yours.',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'He could be on paw patrol',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Does any one know my dogs breed?',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'How can I tell if my dog is pureblood?',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'I caught fleas.',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'How do I get rid of fleas?',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'Who has the cutest breed?',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 1
  },
  {
    title: 'Is this a mutt?',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'How to tell if your mutt has fleas?',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'Looking for fellow breeders.',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Why do people hate my pitbull?',
    post_url: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'Look at my dog.',
    post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'Any single doggo lovers out there?',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'How to train your doggy.',
    post_url: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Why does he chase his tail?',
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'Fifty shades of fur a breeding guide for fellow dog breeders.',
    post_url: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Where can I find dog mints?',
    post_url: 'https://shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'Why is my dogs breath bad',
    post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'How to get rid of fleas',
    post_url: 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
