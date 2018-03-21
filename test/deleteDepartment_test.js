//import { isNullOrUndefined } from 'util';

const assert  = require('assert');
const Department = require('../src/department');
describe('deleting the department', () => {
    let IT;
    beforeEach((done) => {
        IT = new Department({name: 'IT'});
        IT.save()
        .then(() => done())
    });
    
    
    it('Instance remove Department', (done) => {
        IT.remove()
            .then(() => {
                Department.findOne({name: 'IT'})
            }).then((department) =>{
                console.log(department);
                assert(department === undefined)
                done();
            })

    });
    it('Remove method on Department class', (done) => {
        Department.remove({name: 'IT'})
            .then(() => {
                Department.findOne({name: 'IT'})
            }).then((department) =>{
               assert(department === undefined)
                done();
            });

    });
    it('by using findOneAndRemove', (done) => {
        Department.findOneAndRemove({name: 'IT'})
        .then(()=>{
            Department.findOne({name: 'IT'})
        })
        .then((department) => {
            assert(department === undefined);
            done();
        });
    }); 



    it('find a particular Department id', (done) => {
        Department.findByIdAndRemove(IT._id)
        .then(()=>{
            Department.findOne({name: 'IT'})
        })
        .then((department) => {
            assert(department === undefined);
            done();
        });
    });       
});