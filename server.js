const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

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
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/postdata', (req, res) => {
    res.send(postdata);
});

app.get('/api/postdata/:id', (req, res) => {
    let blog = postdata.find(c => c.id === parseInt(req.params.id));
    if (!blog) res.status(404).send('The blog with the given ID was not found.');
    res.send(blog);
});

app.post('/api/postdata', (req, res) => {
    // const schema = Joi.object ({
    //     name: Joi.string().min(3).required()
    // });

    // const result = schema.validate
    if (!req.body.title) {
        // 400 Bad Request
        res.status(400).send('Title is required');
        return;
    }
    const blog = {
        id: postdata.length + 1,
        name: req.body.title,
        blog_text: req.body.blog_text,
        user_id: req.body.user_id
    };
    postdata.push(blog);
    res.send(blog);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));

