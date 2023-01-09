let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rishabh_data:data_987@rishabhcl.ss3xqpe.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    console.log('connection success');
})
.catch((err) =>{
    console.log(err);
    console.log('Got error while connecting...');
});

const loginSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    msg : {
        type: String,
    }
})

const collection = mongoose.model('users',loginSchema);

module.exports = collection;

