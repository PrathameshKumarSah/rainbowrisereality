import mysql2 from "mysql2";

// let connection;

export const connectToDb = () => {
    try{
        const connection = mysql2.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD
        });
        console.log("Database is connected!");
        return connection;

    } catch(err){
        console.log("Error in connecting db", err);
    }
};

// export default connection;

// app.get('/', (req, res) => {
//     try{
//         connection.query('SELECT COUNT(*) FROM users', (err, result) => {
//             if(err) throw err;
//             let cnt = result[0]['COUNT(*)'];
//             res.render('index.ejs', {'count' :  cnt });
//         });
//     } catch(err){
//         console.log(err);
//     }
//     // res.send('hello');
// });