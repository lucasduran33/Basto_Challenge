const mongoose = require('mongoose')
//const {boolean} = require('webidl-conversions')
const datasSchema = new mongoose.Schema(
    {
        type:{unique: false,
            type:String,
            enum: ['novillo','toro','vaquillona'],
            default: 'novillo',
            sparse: true
        },
        typeDisp:{type:String,
            enum: ['collar','caravana'],
            default: 'collar',
            sparse: true
        },
        numDisp:{unique: false, type:String, sparse: true},
        weight: {unique: false, type:Number,  sparse: true},
        name:{unique: false ,type:String,   sparse: true, },
    
    },{ timeStamps:true}
    );
    module.exports = mongoose.model('Datas',datasSchema)