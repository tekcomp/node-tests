const expect = require('expect'); //assertion libraries

const utils = require('./utils');

it('should add two numbers', () => {
 var res = utils.add(33, 11);

 expect(res).toBe(44).toBeA('number');

});

it('should async and add two numbers', (done) =>{
    utils.asyncAdd(3, 4, (sum) =>{
        expect(sum).toBe(7).toBeA('number');
        done();
    })
})

it('should be square a numbers', () => {
     var res = utils.square(3);
     expect(res).toBe(3).toBeA('number');

});

it('should async square two numbers', (done) =>{
    utils.asyncSquare( 3, (res) =>{
         expect(res).toBe(9).toBeA('number');
         done();
     })
})

it('Should set First and Last Name', () =>{

    var user = {location: 'Miami', age: 25}
    var res = utils.setName(user, 'Alberto Ramos');

    expect(res).toInclude({
        firstName:'Alberto', 
        lastName:'Ramos'
    });

});