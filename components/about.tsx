import Image from "next/image";

function About(props: any) {
    const {children, url, right= true} = props;
    return <div className="secondpage_floor">
        {
            right ?<>
                    <div className="secondpage_floor_image">
                        <Image
                            src={url}
                            fill
                            alt="Picture of the author"
                        />
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
                        <Image
                            src={url}
                            fill
                            alt="Picture of the author"
                        />
                    </div>
                </>
        }

    </div>
}

export default About;