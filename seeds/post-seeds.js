const { Post } = require('../models')

const postdata = [{
    id: 1,
    title: 'Donec posuere metus vitae ipsum.',
    blog_text: 'test092839',
    user_id: 1
},
{
    id: 2,
    title: 'Donec posuere metus vitae ipsum.',
    blog_text: 'test029384',
    user_id: 2
},
{
    id: 3,
    title: 'Donec posuere metus vitae ipsum.',
    blog_text: 'test2343',
    user_id: 3
}
]

const seedPosts = () => Post.bulkCreate(postdata)
module.exports = seedPosts