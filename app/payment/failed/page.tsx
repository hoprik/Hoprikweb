"use client"
import Page from "../../../components/page";
import {useEffect} from "react";

function mark() {
    return <svg width="100" height="100" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">

        <path fill="red"
              d="M11.71 10.29C11.8037 10.383 11.8781 10.4936 11.9289 10.6154C11.9797 10.7373 12.0058 10.868 12.0058 11C12.0058 11.132 11.9797 11.2627 11.9289 11.3846C11.8781 11.5064 11.8037 11.617 11.71 11.71C11.617 11.8037 11.5064 11.8781 11.3846 11.9289C11.2627 11.9797 11.132 12.0058 11 12.0058C10.868 12.0058 10.7373 11.9797 10.6154 11.9289C10.4936 11.8781 10.383 11.8037 10.29 11.71L9 10.41L7.71 11.71C7.61704 11.8037 7.50644 11.8781 7.38458 11.9289C7.26272 11.9797 7.13201 12.0058 7 12.0058C6.86799 12.0058 6.73728 11.9797 6.61542 11.9289C6.49356 11.8781 6.38296 11.8037 6.29 11.71C6.19627 11.617 6.12188 11.5064 6.07111 11.3846C6.02034 11.2627 5.9942 11.132 5.9942 11C5.9942 10.868 6.02034 10.7373 6.07111 10.6154C6.12188 10.4936 6.19627 10.383 6.29 10.29L7.59 9L6.29 7.71C6.1017 7.5217 5.99591 7.2663 5.99591 7C5.99591 6.7337 6.1017 6.4783 6.29 6.29C6.4783 6.1017 6.7337 5.99591 7 5.99591C7.2663 5.99591 7.5217 6.1017 7.71 6.29L9 7.59L10.29 6.29C10.4783 6.1017 10.7337 5.99591 11 5.99591C11.2663 5.99591 11.5217 6.1017 11.71 6.29C11.8983 6.4783 12.0041 6.7337 12.0041 7C12.0041 7.2663 11.8983 7.5217 11.71 7.71L10.41 9L11.71 10.29Z"/>

    </svg>
}

function Main(): JSX.Element {
    useEffect(()=>{
        setTimeout(()=>{
            // @ts-ignore
            const tg = window.Telegram.WebApp
            const data = {answer:"failed"}
            tg.sendData(JSON.stringify(data));
            tg.close()
        }, 2000)
    })
    return <>
        <Page>
            <div className="payment-wrapper">
                <h1 className="failed-info">Payment failed {mark()}</h1>
            </div>
        </Page>
    </>
}

export default Main;