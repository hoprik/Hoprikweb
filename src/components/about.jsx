function About(props) {
    const {children, url, right= true} = props;
    return <div className="secondpage_floor">
        {
            right ?<>
                <div className="secondpage_floor_image">
                    <div className="secondpage_floor_image_image"></div>
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
                        <div className="secondpage_floor_image_image"></div>
                    </div>
                </>
        }

    </div>
}

export default About;