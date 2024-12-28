import { config} from "../../index.js";
import bcrypt from 'bcrypt';
import path, {dirname} from 'path';
import fs from 'fs';
import jwt from "jsonwebtoken";
import { fileURLToPath } from 'url';
import {generateToken} from '../libs/utils.js'
import sendEmail from "../middleware/mail.sender.js";
import mysql2 from "mysql2/promise";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ===========================================================================

export const showProperties = async (req, res) => {
    const pool = await mysql2.createPool(config);
    try{
        const [rows] = await pool.query('SELECT * FROM properties');
        // console.log(rows);
        res.send(rows);
    } catch(err){
        console.log(err);
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}


export const handleLogin =  async (req, res) => {
    const { email, password } = req.body;
    const pool = await mysql2.createPool(config);
    try{
        const [rows] = await pool.query('SELECT * FROM admin WHERE email = ?', [email])
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid email', loggedIn: false, user:{}  });
        }

        const user = rows[0];
        const passwordMatch = await bcrypt.compare(password, user.pass);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password', loggedIn: false, user:{} });
        }
        await generateToken(email, res);
        const data = {name:user.name, email:user.email, phone:user.phone};
        res.status(200).json({ message: 'Login Successfull', loggedIn: true, user:data });
        
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

// logout
export const logout = (req, res) => {
    try {
      res.cookie("jwt", "", { maxAge: 0 });
      res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      console.log("Error in logout controller", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };


// Handle when Property add 
export const addPropertyHandler =  async (req, res) => {
    const data = [[req.body.title, req.body.category, req.body.location, req.file.filename, req.body.price, req.body.price_title, req.body.price_range, req.body.description, req.body.address, req.body.city, req.body.postal_code, req.body.state]];
    const pool = await mysql2.createPool(config);
    try{
        await pool.query('INSERT INTO properties (title, category, location, img, price, price_title, price_range, description, address, city, postal_code, state) VALUES ?', [data]);

        res.json({ message: 'Property Added Successfully' });
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
} 

// Update Property
export const getProperty = async (req, res) => {
    const {id} = req.params;
    const pool = await mysql2.createPool(config);
    // res.json({message: "Updated Property Successfully"});
    try{
        const [result] = await pool.query('SELECT * FROM properties WHERE p_id = ?',id);
        res.send(result);
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'error in getting properties' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

// Update Property Image
export const updateImg = async (req, res) => {
    const values = [req.file.filename, req.body.id];
    const pool = await mysql2.createPool(config);
    try{
        deleteOldImg(req.body.id);
        const [rows] = await pool.query("UPDATE properties SET img= ? WHERE p_id = ?", values);
        // console.log(rows);
        res.json({ message: 'Image Updated Successfully', img: req.file.filename });
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

const deleteOldImg = async (id) => {
    // console.log(id);
    const pool = await mysql2.createPool(config);
    try{
        const [rows] = await pool.query("SELECT img FROM properties WHERE p_id = ?", [id]);
        if(rows.length > 0){
            
            const filePath = path.join(__dirname, "../../imgs", rows[0].img);
            // console.log("filepath:", filePath);

            // Check if the file exists
            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    console.log({ message: "File not found." });
                }
                // Delete the file
                fs.unlink(filePath, (err) => {
                if (err) {
                    console.log({ message: "Error deleting the file." });
                }
                console.log({ message: "File deleted successfully." });
                });
            });
            console.log("delete old image from imgs folder");
        }
    } catch(err){
        console.log(err);
        return ({ message: 'Internal Server error' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

// updatePropertyDetails
export const updatePropertyDetails = async (req, res) => {
    const pool = await mysql2.createPool(config);
    const sql = "UPDATE properties SET title=? ,category=?, location=?, price=?, price_title=?, price_range=?, description=?, address=?, city=?, postal_code=?, state=?, updated_at=? WHERE p_id = ?"
    const values = [req.body.title, req.body.category, req.body.location, req.body.price, req.body.price_title, req.body.price_range, req.body.description, req.body.address, req.body.city, req.body.postal_code, req.body.state, new Date(), req.body.id];
    try{
        await pool.query(sql, values);
        res.json({ message: 'Property Details Updated Successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Error in getting properties!' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

// latest property
export const latestProperty = async (req, res) => {
    const {id} = req.params;
    const pool = await mysql2.createPool(config);
    // res.json({message: "Updated Property Successfully"});
    try{
        const [row1] = await pool.query('SELECT * FROM properties ORDER BY created_at DESC LIMIT 5');
        const [row2] = await pool.query('SELECT COUNT(*) AS noOfProperties FROM properties;');
        const [row3] = await pool.query('SELECT COUNT(*) AS noOfEnq FROM enquires;');
        // console.log("data: ",row1,row2,row3);
        const result = {properties: row1, noOfProperties: row2, noOfEnq: row3};
        res.send(result);
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

// remove property
export const removeProperty = async (req, res) => {
    const pool = await mysql2.createPool(config);
    const {id} = req.params;
    try{
        await pool.query('DELETE FROM properties WHERE p_id=?',[id]);
        res.json({ message: 'Removed property successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

// update Profile Details
export const updateProfileDetails = async (req, res) => {
    const pool = await mysql2.createPool(config);
    const sql = "UPDATE admin SET name=?, email=?, phone=?, updated_at=? WHERE 1"
    const values = [req.body.name, req.body.email, req.body.phone, new Date()];
    try{
        await pool.query(sql, values);
        res.json({ message: 'Profile Details Updated Successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

// change password
export const changePassword = async (req, res) => {
    const pool = await mysql2.createPool(config);
    const {oldPass, newPass, confirmPass} = req.body;
    // res.json({message: "Updated Property Successfully"});
    try{
        const [row1] = await pool.query('SELECT pass FROM admin WHERE 1');
        // console.log(row1[0].pass)

        const passwordMatch = await bcrypt.compare(oldPass, row1[0].pass);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid Password' });
        }
        const sql = "UPDATE admin SET pass=?, updated_at=? WHERE 1"
        if(newPass!=confirmPass){
            return res.status(401).json({ message: 'New and Confirm password is not same.' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPass, salt);
        const values = [hashedPassword, new Date()];
        // console.log(req.body.phone);
        await pool.query(sql, values);
        res.json({ message: 'Your Password Updated Successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

// send OTP
export const sendOTP = async (req, res) => {
    const pool = await mysql2.createPool(config);
    // const {id} = req.params;
    try{
        const [row] = await pool.query('SELECT email FROM admin WHERE 1');
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        // console.log("four degit otp",otp);

        const salt = await bcrypt.genSalt(10);
        const hashedOtp = await bcrypt.hash(otp, salt);
        await pool.query('UPDATE admin SET otp=?, updated_at=? WHERE 1',[hashedOtp, new Date()]);

        const sub = 'Your One-Time Password (OTP) to Reset Password - Rainbow Rise Reality';
        const msg = `<p>Hello,</p>
                    <p>We received a request to reset your password. Use the OTP below to complete the process:</p>
                    <div style="display: inline-block;background: #f1f1f1;color: #4CAF50;font-size: 24px;font-weight: bold;padding: 10px 20px;border-radius: 4px;margin: 20px 0;">${otp}</div>
                    <p>This OTP is valid for the next 10 minutes.</p>`;
        await sendEmail(row[0].email, sub, msg);
        res.json({ message: 'Otp sended to your Mail'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

// otp verification
export const otpVerification = async (req, res) => {
    const pool = await mysql2.createPool(config);
    const {otp} = req.body;
    try{
        const [row] = await pool.query('SELECT otp, updated_at FROM admin WHERE 1');
        const otpMatch = await bcrypt.compare(otp, row[0].otp);
        if (!otpMatch) {
            return res.status(401).json({ message: 'Incorrect OTP', verification:false });
        }
        await pool.query('UPDATE admin SET otp=?, updated_at=? WHERE 1',['', new Date()]);
        res.json({ message: 'Verification Successfull', verification:true});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error', verification:false  });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

// create new password
export const createNewPass = async (req, res) => {
    const pool = await mysql2.createPool(config);
    const {newPass, confirmPass} = req.body;
    // res.json({message: "Updated Property Successfully"});
    try{
        if(newPass!=confirmPass){
            return res.status(401).json({ message: 'New and Confirm password is not same.' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPass, salt);
        const values = [hashedPassword, new Date()];
        // console.log(req.body.phone);
        await pool.query('UPDATE admin SET pass=?, updated_at=? WHERE 1', values);
        res.json({ message: 'Your Password Updated Successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    } finally {
        try {
            await pool.end();
            
        } catch (error) {
            console.error('Error closing the database connection pool:', error);
        }
      }
}

// check auth
export const protectRoute = async (req, res) => {
    // const pool = await mysql2.createPool(config);
    // console.log('pool is created');
  // try {
    // const token = req.cookies.jwt;

    // if (!token) {
    //   return res.status(401).json({ message: "Unauthorized - No Token Provided" });
    // }

    // let decoded;
    // try {
    //   decoded = jwt.verify(token, process.env.JWT_SECRET);
    // } catch (error) {
    //   return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    // }

    // const userId = decoded.userId;

    // if (!userId) {
    //   return res.status(400).json({ message: "Invalid token payload" });
    // }

    // const [row] = await pool.query('SELECT name, email, phone FROM admin WHERE email = ?', [userId]);
    // console.log(decoded, row);
    // if (row.length === 0) {
    //     return res.status(404).json({ message: "User not found" });
    // }
    return res.status(200).json({ name: 'Admin', email: 'admin@gmail.com', phone: '9625136114' });
  // } catch (error) {
  //   console.log("Error in protectRoute middleware: ", error);
  //   res.status(500).json({ message: "internal server error", errorMsg: error });
  // } 
  // finally {
  //   try {
  //       await pool.end();        
  //   } catch (error) {
  //       console.error('Error closing the database connection pool:', error);
  //   }
  // }
};
