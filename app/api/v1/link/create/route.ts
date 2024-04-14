import mysql from 'serverless-mysql';
import md5 from 'crypto-js/md5';
const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    }
});
export async function POST(req: Request) {
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