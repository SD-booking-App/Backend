import express from "express";
import { createStructure, deleteStructure, getStructure, getStructures, updateStructure } from "../controllers/structure.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();



router.post("/:officeid",verifyAdmin,createStructure)


// update

router.put("/:id",verifyAdmin,updateStructure);


// delete
router.delete("/:id/:hotelid",verifyAdmin,deleteStructure);

// get
router.get("/:id",getStructure);


// getall
router.get("/",getStructures);



export default router