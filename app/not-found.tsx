import Page from "@/components/page";
import Navbar from "@/components/navbar";
import Mobilenavbar from "@/components/mobilenavbar";
import End from "@/components/end";

export default function NotFound(){
    return <>
        <Navbar/>
        <Mobilenavbar/>
        <Page>
            <div className="payment-wrapper">
                <h1 className="success-info" style={{fontSize: "32px"}}>Ошибка 404! Страница не найдена</h1>
            </div>
        </Page>
        <End/>
    </>
}