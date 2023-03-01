import express from "express";
import { createOffice, deleteOffice, getOffice, getOffices, updateOffice } from "../controllers/office.js";

import Office from "../models/Office.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router=express.Router();

// create
router.post("/",verifyAdmin,createOffice)


// update

router.put("/:id",verifyAdmin,updateOffice);


// delete
router.delete("/:id",verifyAdmin,deleteOffice);

// get
router.get("/:id",getOffice);


// getall
router.get("/",getOffices);



export default router;