const mongoose = require('mongoose')
//const {boolean} = require('webidl-conversions')
const datasSchema = new mongoose.Schema(
    {
        type:{unique: false,
            type:String,
            enum: ['novillo','toro','vaquillona'],
            default: 'novillo',
           required:true
        },
        typeDisp:{type:String,
            enum: ['collar','caravana'],
            default: 'collar',
            required:true
        },
        numDisp:{unique: false, type:String,required:true},
        weight: {unique: false, type:Number,required:true },
        name:{unique: false ,type:String, required:true  },

    },{ timeStamps:true}
    );
    module.exports = mongoose.model('Datas',datasSchema)