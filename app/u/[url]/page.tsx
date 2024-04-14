"use client"

import {useState} from "react";
import {redirect} from "next/navigation";
import Page from "@/components/page";

async function getUrl(url: string) {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1'},
        body: '{"code":"'+url+'"}'
    };

    const res = await fetch('/api/v1/link/get', options)
    const json = await res.json()
    if ("url" in json){
        return {"url":json["url"]}
    }else{
        return {"error":json["error"]}
    }


}

function Redirects({params}: {params: {url: string}}) {
    const _url = getUrl(params.url)
    // @ts-ignore
    _url.then(e=>{
        if ("url" in e){
            location.href = e.url
        }
        else{
            location.href = "https://hoprik.ru/"
        }
    })

    return <>
        <Page>
            <div className="payment-wrapper">
                <h1 className="success-info">Перенаправляем....</h1>
            </div>
        </Page>
    </>
}

export default Redirects