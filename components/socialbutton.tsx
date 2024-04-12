"use client"
import Icon from "./icons";
function Socialbutton(props: any) {
    const {color="#00ff04", network="google", text="Just the text", href="youtube.com"} = props;
    return <div className="social_button" style={{backgroundColor: color}} onClick={e=>{
        if (href.includes("mailto:")){
            e.preventDefault();
            navigator.clipboard.writeText(href.split(":")[1])
        }
        else {
            const a = document.createElement("a")
            a.href = href
            a.target = "_blank"
            a.rel = "noreferrer"
            a.click()
        }
    }}>
        <div className="social_icon">
            <Icon nameIcon={network} size="60px"/>
        </div>
        <a className="social_link" href={href} target="_blank" rel="noreferrer">{text}</a>
    </div>
}

export default Socialbutton;