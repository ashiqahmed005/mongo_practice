const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: {
      type: String
      //required: true
    },
    lastName: {
        type: String
        //required: true
      },
    dateofBirth: {
        type: Date
        //required: true
      },
    gender: {
        type: String, 
       // required: true, 
        enum: ['Male', 'Female', 'Transgender'], 
        default: 'Male'
      },
    hireDate: {
        type: Date

    }  
  });
const Employee = mongoose.model('employee', employeeSchema);  

module.exports = Employee;