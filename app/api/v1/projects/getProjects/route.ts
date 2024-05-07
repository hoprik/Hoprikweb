import mysql from "mysql2/promise";

export async function POST() {
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
    const result = await db.query("SELECT * FROM projects")
    await db.end();
    const items = {}
    // @ts-ignore
    for (const project of result[0]) {

        const urls = {}
        // @ts-ignore
        for (const url of project.urls.split(",")){
            const _url = url.split(":")
            if (_url.length == 2){
                // @ts-ignore
                urls[_url[0]] = [_url[1]]
            }
            else{
                // @ts-ignore
                urls[_url[0]] = ""
                for (let index = 1; index < _url.length; index++) {
                    // @ts-ignore
                    urls[_url[0]]+=":"+_url[index]
                }
            }

        }
        // @ts-ignore
        items[project.name] = {"name":project.display_name, "image": project.image, "desc": project.desc, "tools": project.tools.split(","), "url": project.name, "urls": urls};
    }
    return Response.json(items)
}
