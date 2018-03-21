const assert  = require('assert');
const Department = require('../src/department');
describe('reading the department', () => {
    let IT;
    beforeEach((done) => {
        IT = new Department({name: 'IT'});
        IT.save()
        .then(() => done())
    });
    
    
    it('find a particular Department', (done) => {
        Department.findOne({_id: IT._id})
        .then((department) => {
            assert(department.name === 'IT');
            done();
        });
    });  

    it('find the department', (done) =>{
        Department.find({name: 'IT'})
        .then((departments) =>{
            //console.log(departments[0]._id);
            //console.log(IT._id);
            assert(departments[0]._id.toString() === IT._id.toString());
            done();
        });
        
    });
});