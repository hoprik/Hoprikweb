import mysql from "mysql2/promise";

export async function POST(req: Request) {
    if (!process.env.MYSQL_USER){
        return Response.json({"error": "env varible MYSQL_USER not found"});
    }
    let db: mysql.Connection
    try {
        db = await mysql.createConnection({
            socketPath: "/run/mysqld/mysqld.sock",
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        });
    }catch (err){
        try{
            db = await mysql.createConnection({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE
            });
        }catch(err){
            return Response.json({"error": "Database connection failed"});
        }

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