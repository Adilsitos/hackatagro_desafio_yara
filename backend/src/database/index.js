const mongoose= require('mongoose');

mongoose.connect(process.env.uri, {useMongoClient:true});
mongoose.Promise= global.Promise

module.exports= mongoose;