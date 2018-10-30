const request = require('supertest');

const expect = require('expect');


var app = require('./server').app;

it('Should return Hello Wolrd response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found.'
            });
        })
        .end(done);
});


it("You should exist in user object", (done) => {
//make new test
//assert 200
//assert that you wexit in users array
request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
        expect(res.body).toInclude({
            name: 'Alberto',
            age: 45
        })
    })
    .end(done);
});