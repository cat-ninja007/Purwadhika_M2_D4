import HeadlineLeft from "./HeadlineLeft"


const About = () => {
    return (
        <>
            <div id="about" className="w-screen flex pl-20 pr-20 pt-40 pb-20 gap-16 justify-between ">
            {/* <div className="w-screen"> */}
                <HeadlineLeft 
                    headline='About'
                />

                <div className="w-[839px]">
                {/* <div className="w-full"> */}
                    <p className="font-light text-[27px] leading0[37.8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    {/* <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p> */}
                </div>
            </div>
        </>
    )
}

export default About