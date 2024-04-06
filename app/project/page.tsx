import Page from "@/components/page";
import Navbar from "@/components/navbar";
import Mobilenavbar from "@/components/mobilenavbar";
import End from "@/components/end";


function Main(): JSX.Element {
    return <>
        <Navbar/>
        <Mobilenavbar/>
        <main>
        <Page>
            <div className="payment-wrapper">
                <h1 className="success-info">Ошибка проект не найден</h1>
            </div>
        </Page>
        </main>
        <End/>
    </>
}

export default Main;