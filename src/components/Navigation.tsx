
const Navigation = () => {
    return (
        <>
            <div className="navigation flex justify-between pt-[26px] pb-[26px] pl-[80px] pr-[80px] absolute left-0 right-0">
            {/* <div className="navigation flex justify-between pb-[26px] pl-[80px] pr-[80px]"> */}
                <div className="header-left">
                    <a className="text-black" href="/">@Ayush Barnwal</a>
                </div>
                <div className="header-right">
                    <nav>
                        <ul className="flex gap-[40px]">
                            <li><a href="#about">About</a></li>
                            <li><a href="/">Work</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navigation;