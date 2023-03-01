import mongoose from 'mongoose';



const structureSchema= new mongoose.Schema({

    desk:[{number: Number,position:{type:[Number]} ,unavailableDates:{type:[Date]}}],
    windowview:{
        top:Boolean,
        bottom:Boolean,
        right:Boolean,  
        left:Boolean,
        // required:true,
    },
    entry:{
        x:Number,
        y:Number,
    },
    table:{
        x:Number,
        y:Number,
    },
    rectangle:{
        x:Number,
        y:Number,
}
    
},
{timestamps:true}
);
export default mongoose.model("structure",structureSchema)