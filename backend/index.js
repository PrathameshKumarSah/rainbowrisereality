import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import webRoutes from "./src/routes/web.routes.js";
import mysql2 from "mysql2/promise";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/imgs', express.static("imgs"));




app.use('/api', webRoutes);
app.get('/test', (req, res) => res.send("testing"));

// export default connection;
export let connection;

app.listen(PORT, async () => {
    console.log(`Server is Started listening on Port ${PORT}`);

    // connect to the db
    try{
      connection = await mysql2.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD
      });
      
      console.log("Database is Connected!");
    } catch(err){
      console.log("Error in connecting db");
    }
})
