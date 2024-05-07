import mysql from "mysql2/promise";

export async function POST(req: Request, res: Response) {
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
    const json = await req.json();
    const login = json["login"]
    const password = json["password"]
    const result = await db.query(`SELECT * FROM users WHERE login = "${login}" AND password="${password}"`);
    await db.end();


    // @ts-ignore
    if (result[0].length == 0) {
        const data = {
            "success": false,
            "error": "Ошибка, логин или пароль неверен!"
        }
        return Response.json(data);
    }

    // @ts-ignore
    const token = result[0][0]["token"]
    const data = {
        "success": true,
        "token": token
    }

    // @ts-ignore
    return Response.json(data)
}
