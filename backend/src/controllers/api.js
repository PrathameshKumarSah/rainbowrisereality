import { connection} from "../../index.js";
import bcrypt from 'bcrypt';
import path, {dirname} from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {generateToken} from '../libs/utils.js'
import sendEmail from "../middleware/mail.sender.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ===========================================================================

export const showProperties = async (req, res) => {
    try{
        const [rows] = await connection.query('SELECT * FROM properties');
        // console.log(rows);
        res.send(rows);
    } catch(err){
        console.log(err);
    }
    // sendEmail('dd','dd');
}


export const handleLogin =  async (req, res) => {
    const { email, password } = req.body;
    try{
        const [rows] = await connection.query('SELECT * FROM admin WHERE email = ?', [email])
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = rows[0];
        const passwordMatch = await bcrypt.compare(password, user.pass);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        await generateToken(email, res);
        res.json({ message: 'Login successful' });
        
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
}


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
    try{
        await connection.query('INSERT INTO properties (title, category, location, img, price, price_title, price_range, description, address, city, postal_code, state) VALUES ?', [data]);

        res.json({ message: 'Property Added Successfully' });
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    }
} 

// Update Property
export const getProperty = async (req, res) => {
    const {id} = req.params;
    // res.json({message: "Updated Property Successfully"});
    try{
        const [result] = await connection.query('SELECT * FROM properties WHERE p_id = ?',id);
        res.send(result);
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'error in getting properties' });
    }
}

// Update Property Image
export const updateImg = async (req, res) => {
    const values = [req.file.filename, req.body.id];
    try{
        deleteOldImg(req.body.id);
        const [rows] = await connection.query("UPDATE properties SET img= ? WHERE p_id = ?", values);
        // console.log(rows);
        res.json({ message: 'Image Updated Successfully', img: req.file.filename });
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    }
}

const deleteOldImg = async (id) => {
    console.log(id);
    try{
        const [rows] = await connection.query("SELECT img FROM properties WHERE p_id = ?", [id]);
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
    }
}

// updatePropertyDetails
export const updatePropertyDetails = async (req, res) => {
    const sql = "UPDATE properties SET title=? ,category=?, location=?, price=?, price_title=?, price_range=?, description=?, address=?, city=?, postal_code=?, state=?, updated_at=? WHERE p_id = ?"
    const values = [req.body.title, req.body.category, req.body.location, req.body.price, req.body.price_title, req.body.price_range, req.body.description, req.body.address, req.body.city, req.body.postal_code, req.body.state, new Date(), req.body.id];
    try{
        await connection.query(sql, values);
        res.json({ message: 'Property Details Updated Successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Error in getting properties!' });
    }
}

// latest property
export const latestProperty = async (req, res) => {
    const {id} = req.params;
    // res.json({message: "Updated Property Successfully"});
    try{
        const [row1] = await connection.query('SELECT * FROM properties ORDER BY created_at DESC LIMIT 5');
        const [row2] = await connection.query('SELECT COUNT(*) AS noOfProperties FROM properties;');
        const [row3] = await connection.query('SELECT COUNT(*) AS noOfEnq FROM enquires;');
        // console.log("data: ",row1,row2,row3);
        const result = {properties: row1, noOfProperties: row2, noOfEnq: row3};
        res.send(result);
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    }
}

// remove property
export const removeProperty = async (req, res) => {
    const {id} = req.params;
    try{
        await connection.query('DELETE FROM properties WHERE p_id=?',[id]);
        res.json({ message: 'Removed property successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    }
}

// update Profile Details
export const updateProfileDetails = async (req, res) => {
    const sql = "UPDATE admin SET name=?, email=?, phone=?, updated_at=? WHERE 1"
    const values = [req.body.name, req.body.email, req.body.phone, new Date()];
    try{
        await connection.query(sql, values);
        res.json({ message: 'Profile Details Updated Successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// change password
export const changePassword = async (req, res) => {
    const {oldPass, newPass, confirmPass} = req.body;
    // res.json({message: "Updated Property Successfully"});
    try{
        const [row1] = await connection.query('SELECT pass FROM admin WHERE 1');
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
        await connection.query(sql, values);
        res.json({ message: 'Your Password Updated Successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    }
}

// send OTP
export const sendOTP = async (req, res) => {
    // const {id} = req.params;
    try{
        const [row] = await connection.query('SELECT email FROM admin WHERE 1');
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        // console.log("four degit otp",otp);

        const salt = await bcrypt.genSalt(10);
        const hashedOtp = await bcrypt.hash(otp, salt);
        await connection.query('UPDATE admin SET otp=?, updated_at=? WHERE 1',[hashedOtp, new Date()]);

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
    }
}

// otp verification
export const otpVerification = async (req, res) => {
    const {otp} = req.body;
    try{
        const [row] = await connection.query('SELECT otp, updated_at FROM admin WHERE 1');
        const otpMatch = await bcrypt.compare(otp, row[0].otp);
        if (!otpMatch) {
            return res.status(401).json({ message: 'Incorrect OTP', verification:false });
        }
        await connection.query('UPDATE admin SET otp=?, updated_at=? WHERE 1',['', new Date()]);
        res.json({ message: 'Verification Successfull', verification:true});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error', verification:false  });
    }
}

// create new password
export const createNewPass = async (req, res) => {
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
        await connection.query('UPDATE admin SET pass=?, updated_at=? WHERE 1', values);
        res.json({ message: 'Your Password Updated Successfully'});
    } catch(err){
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    }
}
