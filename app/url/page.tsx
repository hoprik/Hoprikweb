"use client"
import Navbar from "@/components/navbar";
import Mobilenavbar from "@/components/mobilenavbar";
import End from "@/components/end";
import Page from "@/components/page";

async function genURL(button: any){
    if (document == null){
        return
    }
    // @ts-ignore
    const input: HTMLInputElement = document.querySelector(".texturl")
    const _button: HTMLButtonElement = button.target
    const wrapper = document.querySelector(".url_wrapper")
    const url = input.value
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1', cache: 'no-store'},
        body: `{"url":"${url}"}`
    };

    // @ts-ignore
    if (!url.startsWith("http")){
        input.placeholder = "Ошибка введите ссылку! Начинающийся с http..."
        input.value = ""
        return
    }

    const res = await fetch('/api/v1/link/create', options)
    const json = await res.json();
    const link = json["url"]
    input.remove()
    _button.remove()
    // @ts-ignore
    wrapper.insertAdjacentHTML("beforeend", "<p class=\"texturl "+link+"\" style=\"color:white;font-size: 32px;\">https://"+location.host+"/u/"+link+"</p> <button class=\"buttonurl\">Скопировать</button>")
    // @ts-ignore
    document.querySelector(".buttonurl").addEventListener("click", copyText)

}

function copyText(){
    // @ts-ignore
    const _button: HTMLButtonElement = document.querySelector(".buttonurl")
    const p = document.querySelector(".texturl")
    // @ts-ignore
    const url = p.classList[1];
    navigator.clipboard.writeText("https://"+location.host+"/u/"+url);
    _button.innerText = "Скопированно"
}

function ShortUrl() {
    // @ts-ignore
    return <>
        <Navbar/>
        <Mobilenavbar/>
        <main>
            <Page>
                <div className="url_wrapper">
                    <input type="text" className="texturl" placeholder="Введите ссылку! Начинающийся с http..."/>
                    <button className="buttonurl" onClick={e=>{genURL(e).then()}}>Сгенерировать ссылку</button>
                </div>
            </Page>
        </main>
        <End/>
    </>
}

export default ShortUrl;