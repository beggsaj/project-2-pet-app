const { Comment } = require('../models')

const commentdata = [
    {
        comment_text: 'Test1',
        user_id: 1,
        post_id: 1
      },
      {
        comment_text: 'Test2',
        user_id: 1,
        post_id: 8
      },
      {
        comment_text: 'Test3',
        user_id: 3,
        post_id: 10
      }
]

const seedComments = () => Comment.bulkCreate(commentdata)

module.exports = seedComments