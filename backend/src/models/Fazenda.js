const mongoose=require('mongoose');

const FazendaSchema= new mongoose.Schema({
    fazenda :{
        type:String,
        require:true,
    },
    colheita:{
        type:String,
        require:true,
    },
    defensivos :{
        type:String,
        require:true,
    },
    custos:{
        type:String,
        require:true,
    },
    corretivos:{
        type:String,
        require:true,
    },
    fertilizantes :{
        type:String,
        require:true,
    },

});

const Fazenda = mongoose.model('Fazenda', FazendaSchema);

module.exports= Fazenda;