import CloseBtn from '../assets/images/Close-btn.png'

interface HiddenMenuProps {
    isVisible: boolean;
    toggleMenu: () => void;
}


const HiddenMenu: React.FC<HiddenMenuProps> = ({ isVisible, toggleMenu }) => {
    return (
        <div className={`hidden-menu-container w-screen h-screen flex fixed top-0 z-50 transition-transform duration-500 ease-in-out ${
            isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="hidden-menu-left w-1/2 bg-black opacity-40 h-svh"></div>

            <div className="hidden-menu-right w-1/2 h-svh bg-black pl-[97px] ">
                <div className="hidden-menu-navigation py-[121px] relative">
                    <nav>
                        <ul className="text-off-white text-6xl font-medium flex flex-col gap-7">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Work</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="close-btn absolute right-14 top-14 " onClick={toggleMenu}>
                        <img className='w-20 h-20' src={CloseBtn} alt="close-button" />
                    </div>
                </div>
                <div className="hidden-menu-social-media">
                    <nav>
                        <ul className="text-off-white flex gap-8 font-normal text-lg">
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