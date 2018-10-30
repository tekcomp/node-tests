const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
    var db = {
        SaveUser: expect.createSpy()
    } ;
    app.__set__('db', db);   

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Andrew', 25);
        expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call saveUser with user object', () => {
        var email = 'aramos@miamidade.gov';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.SaveUser).toHaveBeenCalledWith({email, password});
    })
});