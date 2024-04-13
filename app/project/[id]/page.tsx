import Navbar from "@/components/navbar";
import Mobilenavbar from "@/components/mobilenavbar";
import End from "@/components/end";
import Page from "@/components/page";
import Image from "next/image";
import projects from "@/public/projects.json"

function Project({params}: {params: {id: string}}) {
    // @ts-ignore
    const project = projects[params.id];
    console.log(projects)
    return <>
        <Navbar/>
        <Mobilenavbar/>
        <main>
            <Page>
                {project == undefined? <>
                    <div className="payment-wrapper">
                        <h1 className="success-info">Ошибка проект не найден</h1>
                    </div>
                </> : <>
                    <div className="projectcart_wrapper">
                        <div className="projectcard_left">
                            <div className="projectcard_left__img">
                                <img className="projectcard_left__img" src={project.image} alt=""/>
                            </div>
                        </div>
                        <div className="projectcard_right"></div>
                    </div>
                </>
                }
            </Page>
        </main>
        <End/>
    </>
}

export default Project;