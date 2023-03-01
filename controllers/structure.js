
import Office from "../models/Office.js";
import {createError} from "../utils/error.js";
import Structure from "../models/Structure.js";

export const createStructure=async(req,res,next)=>{
    const officeId=req.params.officeid;
    const newStructure=new Structure(req.body);
    
    try{
        const savedStructure=await newStructure.save();
        
        try{
            await Office.findByIdAndUpdate(officeId,{$push:{structures:savedStructure._id},});
            
        }catch{err}{
            
            next(err);
        }
        res.status(200).json(savedStructure)

    }catch(err){
        
        next(err);
    }
};

export const updateStructure=async (req,res,next)=>{
    
    try{
        const updatedStructure=await Structure.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedStructure);
    }catch(err){ 
    next(err)
}
}
export const deleteStructure=async (req,res,next)=>{
    const officeId=req.params.officeid;
    try{
        await Structure.findByIdAndDelete(req.params.id)
        try{
            await Office.findByIdAndUpdate(officeId,{$pull:{structures:req.param.id},});
            
        }catch{err}{
            next(err);
        }
        res.status(200).json("Structure has been Deleted");
    }catch(err){
    next(err)
}
}
export const getStructure=async (req,res,next)=>{
    try{
        const structure=await Structure.findById(req.params.id);
        res.status(200).json(structure);
    }catch(err){
    next(err)
}
}
export const getStructures=async (req,res,next)=>{
    try{
        const structure=await Structure.find();
        res.status(200).json(structure);
    }catch(err){
    next(err)
}
}