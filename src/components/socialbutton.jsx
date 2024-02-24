import Icon from "./icons";
function Socialbutton(props) {
    const {color="#00ff04", network="google", text="Just the text", href="youtube.com"} = props;
    return <div className="social_button" style={{backgroundColor: color}} onClick={e=>{
        if (href.includes("mailto:")){
            e.preventDefault();
            navigator.clipboard.writeText(href.split(":")[1])
        }
    }}>
        <div className="social_icon">
            <Icon nameIcon={network} size="60px"/>
        </div>
        <a className="social_link" href={href} target="_blank" rel="noreferrer">{text}</a>
    </div>
}

export default Socialbutton;