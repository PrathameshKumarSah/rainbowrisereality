import express from "express";
import { showProperties, handleLogin, addPropertyHandler, getProperty, updateImg, updatePropertyDetails, latestProperty, removeProperty, logout, updateProfileDetails, changePassword, sendOTP, otpVerification, createNewPass, protectRoute, sendEnquire, sendContactMsg, addProjectHandler, showProjects, getProject, searchQuery } from "../controllers/api.js";
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


// // Define storage configuration for multer ===========================
// export const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './imgs'); // Directory to save uploaded files
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     const ext = path.extname(file.originalname);
//     cb(null, file.fieldname + '-' + uniqueSuffix + ext); 
//   }
// });

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // console.log(file.fieldname);
    if (file.fieldname === "images") {
      cb(null, "uploads/images");
    } else if (file.fieldname === "brochure") {
      cb(null, "uploads/brochure");
    } else {
      cb(null, "imgs");
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Multer Middleware
export const upload = multer({ storage });

// const uploadHandler = upload.fields([
//   { name: "images", maxCount: 6 }, // Multiple files from 'multipleFiles' field
//   { name: "brochure", maxCount: 1 }, // Single file from 'singleFile' field
// ]);

// Define file upload fields
const uploadFields = upload.fields([
  { name: "images", maxCount: 10 },
  { name: "brochure", maxCount: 1 },
]);


router.get("/properties", showProperties);
router.get("/projects", showProjects);
router.post("/login", handleLogin);
router.get("/latest-property",  latestProperty);
router.post("/add-property", upload.single('img'), addPropertyHandler);
router.post("/add-project", uploadFields, addProjectHandler);
router.get("/get-property/:id", getProperty);
router.get("/get-project/:id", getProject);
router.get("/auth-check", protectRoute);
router.get("/remove-property/:id", removeProperty);
router.get("/search", searchQuery);
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
