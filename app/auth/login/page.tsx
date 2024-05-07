"use client"
import Page from "@/components/page";
import {useState} from "react";

export default function Auth() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const auth_handle = async (e: any) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.1.0'},
            body: `{"login":"${email}","password":"${password}"}`
        };

        const res = await fetch('/api/v1/auth/tryLogin', options)
        if (res.status !== 200) {
            setError("Неизвестная ошибка: "+res.status);
            return
        }
        const json = await res.json()
        if ("success" in json){
            if (json["success"]) {
                location.href = "http://"+location.host+"/auth/success/?token="+json["token"]
            }
            else{
                setError(json["error"])
            }
        }

    }
    const email_change = (e: any)=>{
        setEmail(e.target.value)
    }
    const password_change = (e: any)=>{
        setPassword(e.target.value)
    }
    return (
        <Page>
            <div className="auth-wrapper">
                <h1 className="auth-info">Авторизация в системе</h1>
                <br/>
                <form className="auth-form" onSubmit={auth_handle}>
                    <input type="email" placeholder="Логин" required onChange={email_change}/>
                    <input type="password" placeholder="Пароль" required onChange={password_change}/>
                    <input type="submit" value="Войти"/>
                </form>
                <p className="auth-error">{error}</p>

            </div>
        </Page>
    )
}