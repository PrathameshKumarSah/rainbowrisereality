import express from "express";
import { showProperties, handleLogin, addPropertyHandler, getProperty, updateImg, updatePropertyDetails, latestProperty, removeProperty, logout, updateProfileDetails, changePassword, sendOTP, otpVerification, createNewPass, protectRoute, sendEnquire, sendContactMsg } from "../controllers/api.js";
import multer from 'multer';
import path from 'path';


const router = express.Router();

// Define storage configuration for multer ===========================
export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './imgs'); // Directory to save uploadImged files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext); 
  }
});

export const uploadImg = multer({ storage });

router.get("/properties", showProperties);
router.post("/login", handleLogin);
router.get("/latest-property",  latestProperty);
router.post("/add-property", uploadImg.single('img'), addPropertyHandler);
router.get("/get-property/:id", getProperty);
router.get("/auth-check", protectRoute);
router.get("/remove-property/:id", removeProperty);
router.post("/update-img", uploadImg.single('img'), updateImg);
router.post("/update-details",  updatePropertyDetails);
router.post("/change-password",  changePassword);
router.post("/update-profile",  updateProfileDetails);
router.post("/logout", logout);
router.get("/send-otp", sendOTP);
router.post("/verify-otp", otpVerification);
router.post("/create-new-password", createNewPass);
router.post("/send-enquire", sendEnquire);
router.post("/send-contactus", sendContactMsg);


export default router
