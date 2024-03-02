import mainImg from "../assets/main.png";

function About(props) {
    const {children, url, right= true} = props;
    console.log(url)
    return <div className="secondpage_floor">
        {
            right ?<>
                <div className="secondpage_floor_image">
                    <div className="secondpage_floor_image_image" style={{backgroundImage: `url(${url})`}}/>
                </div>
                <div className="secondpage_floor_text_wrapper">
                    <p>{children}</p>
                </div>
            </>:
                <>
                    <div className="secondpage_floor_text_wrapper">
                        <p>{children}</p>
                    </div>
                    <div className="secondpage_floor_image">
                        <div className="secondpage_floor_image_image" style={{backgroundImage: `url(${url})`}}/>
                    </div>
                </>
        }

    </div>
}

export default About;