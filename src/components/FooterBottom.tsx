

const FooterBottom = () => {
    return(
        <>
            <div className="footer-bottom flex justify-between">
                <div className="footer-bottom-left">
                    <p className="text-[18px] font-normal leading-[28.8px] text-left text-light-gray">Build with 💖 by Brithgscout & Ayush</p>
                </div>

                <div className="footer-bottom-right">
                    <ul className="flex gap-8">
                        <li><a className="text-off-white text-[18px] font-medium leading-[28.8px] text-left" href="/">Linkedin</a></li>
                        <li><a className="text-off-white text-[18px] font-medium leading-[28.8px] text-left" href="/">Twitter</a></li>
                        <li><a className="text-off-white text-[18px] font-medium leading-[28.8px] text-left" href="/">Instragram</a></li>
                        <li><a className="text-off-white text-[18px] font-medium leading-[28.8px] text-left" href="/">Webflow</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default FooterBottom