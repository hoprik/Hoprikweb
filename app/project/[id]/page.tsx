import Navbar from "@/components/navbar";
import Mobilenavbar from "@/components/mobilenavbar";
import End from "@/components/end";
import Page from "@/components/page";

function Project({params}: any) {
    return <>
        <Navbar/>
        <Mobilenavbar/>
        <main>
            <Page>
                <div className="projectcart_wrapper">
                    <div className="projectcard_left">

                    </div>
                    <div className="projectcard_right"></div>
                </div>
            </Page>
        </main>
        <End/>
    </>
}

export default Project;