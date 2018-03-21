const assert  = require('assert');
const Department = require('../src/department');
describe('Updating the department', () => {
    let IT;
    beforeEach((done) => {
        IT = new Department({name: 'IT'});
        IT.save()
        .then(() => done())
    });
    
    
    it('Instance of Department set and save', (done) => {
        IT.set('name', 'Accounting')
        IT.save()
        .then(()=> Department.find({name: 'Accounting'}))
        .then((departments) =>{
            console.log(departments[0]._id);
            //console.log(IT._id);
            assert(departments[0].name === 'Accounting');
            done();
        });
        
    });  

    // it('find the department', (done) =>{
    //     Department.find({name: 'IT'})
    //     .then((departments) =>{
    //         //console.log(departments[0]._id);
    //         //console.log(IT._id);
    //         assert(departments[0]._id.toString() === IT._id.toString());
    //         done();
    //     });
        
    // });
});