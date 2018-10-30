const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    //give users a name property and Age
    //3 users
    //var  users = [{name: 'Charles', age: 25},{name: 'Alberto', age: 45}];
    res.send(
        [{
            name: 'Charles', 
            age: 25
        },  {
            name: 'Alberto', 
            age: 45
        },  {
            name: 'Aldo', 
            age: 50
        },  {
            name: 'Alain', 
            age: 30
        }]);
});


app.listen(3000);
module.exports.app = app;