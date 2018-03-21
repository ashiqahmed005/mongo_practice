const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const titleSchema = new Schema({
    employeeNumber : {
        type: Schema.Types.ObjectId,
        ref: 'employee'
   },
   title:{
       type: String
   },
    fromDate: {
      type: Date
      //required: true
    },
    toDate: {
        type: Date,
        default: Date.now
        //required: true
      }
    
  });
const Title = mongoose.model('title', titleSchema);  

module.exports = Title;