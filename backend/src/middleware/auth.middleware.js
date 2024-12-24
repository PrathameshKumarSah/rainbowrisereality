import jwt from "jsonwebtoken";
import { connection} from "../../index.js";

export const protectRoute = async (req, res) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No Token Provided" });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    const user = decoded.userId;

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const [row] = await connection.query('SELECT name, email, phone FROM admin WHERE email = ?', [user])
    console.log(row);
    
    if (row.length === 0) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json(row[0]);
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
