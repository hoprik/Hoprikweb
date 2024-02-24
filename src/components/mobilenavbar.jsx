function MobileNavbar() {
    return <div className="mobilenavbar">
        <button className="mobilenavbar_exit" onClick={close}>X</button>
        <div className="mobilenavbar_menu">
            <h1 className="mobilenavbar_menu_h1">Hoprik.ru</h1>
            <hr className="mobilenavbar_menu_hr" />
            <div className="mobilenavbar_menu_items">
                <a className="mobilenavbar_menu_item" href="#info">Обо мне</a>
                <a className="mobilenavbar_menu_item" href="#projects">Проекты</a>
                <a className="mobilenavbar_menu_item" href="#social">Контакты</a>
            </div>
        </div>
    </div>
}

function close() {
    document.querySelector(".mobilenavbar").style.display = "none";
}

export default MobileNavbar;