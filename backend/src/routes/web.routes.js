import express from "express";
import { showProperties, handleLogin, addPropertyHandler, getProperty, updateImg, updatePropertyDetails, latestProperty, removeProperty, logout, updateProfileDetails, changePassword, sendOTP, otpVerification, createNewPass, protectRoute, sendEnquire, sendContactMsg, addProjectHandler } from "../controllers/api.js";
import multer from 'multer';
import fs from 'fs';


const router = express.Router();

// Create directories for uploads if they don't exist
const createDirectories = () => {
  const directories = ["uploads/images", "uploads/brochure"];
  directories.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};
createDirectories();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "images") {
      cb(null, "uploads/images");
    } else if (file.fieldname === "brochure") {
      cb(null, "uploads/brochure");
    } else {
      // console.log(file.fieldname);
      cb(null, "imgs");
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Multer Middleware
export const upload = multer({ storage });

// Define file upload fields
const uploadFields = upload.fields([
  { name: "images", maxCount: 10 },
  { name: "brochure", maxCount: 1 },
]);


router.get("/properties", showProperties);
router.post("/login", handleLogin);
router.get("/latest-property",  latestProperty);
router.post("/add-property", upload.single('img'), addPropertyHandler);
router.post("/add-project", uploadFields, addProjectHandler);
router.get("/get-property/:id", getProperty);
router.get("/auth-check", protectRoute);
router.get("/remove-property/:id", removeProperty);
router.post("/update-img", upload.single('img'), updateImg);
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
