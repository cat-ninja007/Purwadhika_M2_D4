
const HiddenMenu = () => {
    return (
        <div className="hidden-menu-container w-screen h-[700px] border-2 border-red-600">
            <div className="hidden-menu-left"></div>

            <div className="hidden-menu-right">
                <div className="hidden-menu-navigation">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Work</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="hidden-menu-social-media">
                    <nav>
                        <ul>
                            <li><a href="/">Linkedin</a></li>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Webflow</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HiddenMenu