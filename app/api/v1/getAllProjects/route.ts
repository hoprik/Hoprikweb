import mysql from 'serverless-mysql';
const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    }
});
export async function GET() {
    const result = await db.query("SELECT * FROM projects")
    await db.end();
    let items = {}
    // @ts-ignore
    for (const project of result) {
        // @ts-ignore
        items[project.name] = {"name":project.display_name, "image": project.image, "desc": project.desc, "tools": project.tools.split(","), "url": project.name};
    }
    return Response.json(items)
}
