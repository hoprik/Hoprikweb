'use client'
import {useEffect} from "react";
import Page from "@/components/page";
import {useSearchParams} from "next/navigation";

export default function Main(){
    const searchParams = useSearchParams()
    const url = searchParams.get('url')
    useEffect(()=>{
        setTimeout(()=>{
            // @ts-ignore
            const tg = window.Telegram.WebApp
            const data = {answer:url}
            tg.sendData(JSON.stringify(data));
            tg.close()
        }, 100)
    }, [])
    return <>
        <Page>
            <div className="payment-wrapper">
                <h1 className="success-info">Загрузка....</h1>
            </div>
        </Page>
    </>
}
