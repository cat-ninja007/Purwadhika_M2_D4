import AyushSmall from '../assets/images/Ayush-small.png'

const FooterTop = () => {
    return(
        <>
            <div className="footer-top flex items-center justify-between">
                <div className="footer-top-left">
                    <p className='text-6xl font-medium leading-[72px] text-left text-off-white'>Have something in mind?</p>
                    <div className="text-bottom flex gap-3">
                        <img src={AyushSmall} alt="Ayush" />
                        <p className='text-6xl font-medium leading-[72px] text-left text-off-white'>let's build it togeter</p>
                    </div>
                </div>
                <div className="footer-top-right pr-2">
                    <div className="get-in-touch-btn w-[190px] h-[70px] rounded-[170px] bg-off-white flex justify-center items-center">
                        <a className='text-[18px] font-medium leading-[21.6px] text-left text-black' href="/">Get in Touch</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterTop