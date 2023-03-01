import mongoose from 'mongoose';



const OfficeSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    organisation:{
        type: String,
        required:true,
    },
    country:{
        type: String,
        required:true,
    },
    state:{
        type: String,
        required:true,
    },
    city:{
        type: String,
        required:true,
    },
    address:{
        type: String,
        required:true,
    },
    structures:{
        type:[String],
    },
    
});
export default mongoose.model("Office",OfficeSchema)