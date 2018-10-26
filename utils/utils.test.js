const expect = require('expect'); //assertion libraries

const utils = require('./utils');

it('should add two numbers', () => {
 var res = utils.add(33, 11);

 expect(res).toBe(44).toBeA('number');

});

 it('should be square a numbers', () => {
     var res = utils.square(3);
     expect(res).toBe(3).toBeA('number');

 });


it('Should set First and Last Name', () =>{

    var user = {location: 'Miami', age: 25}
    var res = utils.setName(user, 'Alberto Ramos');

    expect(res).toInclude({
        firstName:'Alberto', 
        lastName:'Ramos'
    });

});