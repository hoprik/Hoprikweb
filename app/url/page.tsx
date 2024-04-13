import Navbar from "@/components/navbar";
import Mobilenavbar from "@/components/mobilenavbar";
import End from "@/components/end";
import Page from "@/components/page";
import Image from "next/image";
import projects from "@/public/projects.json"

function ShortUrl({params}: {params: {id: string}}) {
    // @ts-ignore
    const project = projects[params.id];
    return <>
        <Navbar/>
        <Mobilenavbar/>
        <main>
            <Page>
                <div className="url_wrapper">
                    <input type="text" className="texturl"/>
                    <button className="buttonurl">Сгенерировать ссылку</button>
                </div>
            </Page>
        </main>
        <End/>
    </>
}

export default ShortUrl;