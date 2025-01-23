import {redirect} from "next/navigation";
import mysql from "mysql2/promise";
import Navbar from "@/components/navbar";
import Mobilenavbar from "@/components/mobilenavbar";
import Page from "@/components/page";
import End from "@/components/end";

async function getUrl(code: string) {
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
        return undefined
    }
    if (code == undefined){
        await db.end()
        return undefined
    }
    const [result]: any = await db.query(`select * from shorturl where code = "${code}"`)
    await db.end()
    try {
        return result[0].url
    }catch(err){
        return undefined
    }


}

export default async function Redirects({params}: {params: {url: string}}) {
    const redirectUrl = await getUrl(params.url);
    if (!redirectUrl) {
        return <>
            <Navbar/>
            <Mobilenavbar/>
            <Page>
                <div className="payment-wrapper">
                    <h1 className="success-info" style={{fontSize: "32px"}}>Ошибка ссылка не найдена</h1>
                </div>
            </Page>
            <End/>
        </>
    }
    else{
        redirect(redirectUrl)
    }
}
