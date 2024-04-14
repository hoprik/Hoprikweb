import mysql from "mysql2/promise";

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