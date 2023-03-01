import Office from "../models/Office.js"

export const createOffice=async (req,res,next)=>{
    const newOffice=new Office(req.body)
try{
    const savedOffice=await newOffice.save()
    res.status(200).json(savedOffice)
}catch(err){
    next(err)
}
}

export const updateOffice=async (req,res,next)=>{
    // const newOffice=new Office(req.body)
    try{
        const updatedOffice=await Office.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedOffice);
    }catch(err){ 
    next(err)
}
}
export const deleteOffice=async (req,res,next)=>{
    try{
        await Office.findByIdAndDelete(req.params.id)
        res.status(200).json("office has been Delete");
    }catch(err){
    next(err)
}
}
export const getOffice=async (req,res,next)=>{
    try{
        const office=await Office.findById(req.params.id);
        res.status(200).json(office);
    }catch(err){
    next(err)
}
}
export const getOffices=async (req,res,next)=>{
    try{
        const offices=await Office.find();
        res.status(200).json(offices);
    }catch(err){
    next(err)
}
}