import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

// import { verifyToken } from "../utils/verifyToken.js";

const router=express.Router();


// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
// res.send("Heelo user u r logged in");
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Heelo user u r logged in and u can delete your account");
//     })

//     router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//         res.send("Heelo admin u r logged in and u can delete all  accounts");
//         })

// update

router.put("/:id",verifyUser,updateUser);


// delete
router.delete("/:id",verifyUser,deleteUser);

// get
router.get("/:id",verifyUser,getUser);


// getall
router.get("/",verifyAdmin,getUsers);
export default router;