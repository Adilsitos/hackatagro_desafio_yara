const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/hackatagro', {useMongoClient:true});
mongoose.Promise= global.Promise

module.exports= mongoose;