import mysql from "mysql2/promise";

export async function POST(req: Request) {
    let db: mysql.Connection
    try{
        try {
            db = await mysql.createConnection({
                socketPath: "/run/mysqld/mysqld.sock",
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE
            });
        }catch (err){
            db = await mysql.createConnection({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE
            });
        }
    }
    catch(err){
        console.log(err)
        return Response.json({"error": "Database connection failed"+":"+err});
    }
    const {code} = await req.json()
    if (code == undefined){
        return Response.json({"error": "Missing code"})
    }
    const [result] = await db.query(`select * from shorturl where code = "${code}"`)
    await db.end()
    try {
        // @ts-ignore
        return Response.json({"url": result[0].url})
    }catch(err){
        return Response.json({"error": "Missing id"})
    }

}