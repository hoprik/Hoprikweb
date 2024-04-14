import mysql from 'mysql2/promise';
import md5 from 'crypto-js/md5';

export async function POST(req: Request) {
    // @ts-ignore
    let _tmp_webstorm_ = +process.env.MYSQL_PORT;
    // @ts-ignore
    const db = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        port: _tmp_webstorm_,
        database: process.env.MYSQL_DATABASE,
    });
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
    await db.end()
    return Response.json({"url": short_url})
}