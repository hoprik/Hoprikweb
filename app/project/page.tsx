"use client";
import Page from "../../components/page";
import { useSearchParams } from 'next/navigation'


function notFound() {
    return <div className="project_wrapper_error"><h1 className="failed-info" style={{fontSize: "30px"}}>Проект не найден</h1><a className="project_error_a" href="/">На главную страницу</a></div>
}

function projectCart(cart: string | null) {
    return <h1 className="failed-info">{cart}</h1>
}


function Main(): JSX.Element {
    const pathname = useSearchParams()
    return <>
        <Page>
            {pathname.has("cart")? projectCart(pathname.get("cart")) : notFound()}
        </Page>
    </>
}

export default Main;