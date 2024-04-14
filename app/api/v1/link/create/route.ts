import mysql from 'mysql2/promise';
import md5 from 'crypto-js/md5';

export async function POST(req: Request) {
    let db: mysql.Connection
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


    const {url} = await req.json()
    if (url == undefined){
        return Response.json({"error": "Missing URL"})
    }
    if (!url.startsWith("http")){
        return Response.json({"error": "Not valid URL"})
    }
    const crypto = md5(url).toString()
    let short_url = ""
    for (let i = 0; i < 6; i++) {
        short_url+=crypto[i]
    }
    await db.query(`INSERT INTO shorturl (url, code) VALUES ('${url}', '${short_url}')`)
    await db.commit()
    await db.end()
    return Response.json({"url": short_url})
}