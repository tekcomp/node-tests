const expect = require('expect'); //assertion libraries

const utils = require('./utils');

it('should add two numbers', () => {
 var res = utils.add(33, 11);

 expect(res).toBe(44).toBeA('number');
//  if (res !== 44) {
//      throw new Error(`Expected 44, but got ${res}`)
//  }
});

 it('should be square a numbers', () => {
     var res = utils.square(3);
     expect(res).toBe(3).toBeA('number');
//     if (res !== 3) {
//         throw new Error(`Expected 9, but got ${res}.`)
//     }
 });

// it('Should expect some values',() => {
//     //expect(12).toBe(12);
//     //expect({name : 'Alberto'}).toNotEqual({name : 'Alberto'})
//     //expect([2,3,4]).toInclude(2);
//     //expect([2,3,4]).toExclude(1);
//     expect(
//         {
//             name: 'Alberto',
//             age: 25,
//             location: 'Miami'
//         }
//     ).toExclude({
//         age:23
//     })
// });

// should verify first and last names are set

if('Should Verify First and Last Name are set', () =>{

            var User = {
                name: 'Alberto',
                age: 25,
                location: 'Miami'
            }

    var res = utils.setName()
});