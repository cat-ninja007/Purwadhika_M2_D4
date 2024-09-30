import Navigation from "../../components/Navigation"
import FooterBottom from "../../components/FooterBottom"
import AyushContact from '../../assets/images/Ayush-Contact.png'


const ContactPage = () => {
    return (
        <>
            <div className="about-us">
                <div className="navigation pt">
                    <Navigation />
                </div>
                <div className="contact-us-container flex pl-20 pr-20 pt-[215px] pb-[100px] justify-between">

                    <div className="contact-us-container-left">
                        
                        <div className="contact-us-image pb-14">
                            <img src={AyushContact} alt="Ayus-Contact" />
                        </div>

                        <div className="contact-us-detail pb-10">
                            <p className="contact-title text-[18px] font-normal leading-[28.8px] text-left text-dark-gray">Contact Details</p>
                            <p className="contact-email text-[27px] font-normal leading-[37.8px] text-left text-black">ayush.barnwal@brightscout.com</p>
                            <p className="contact-phone text-[27px] font-normal leading-[37.8px] text-left text-black">+91 8651447521</p>
                        </div>

                        <div className="contact-us-social-media">
                            <p className="contact-social text-[18px] font-normal leading-[28.8px] text-left text-dark-gray">Social</p>
                            <a href="/" className="contact-us-social-link text-[27px] font-normal leading-[37.8px] text-left text-black block">Instagram</a>
                            <a href="/" className="contact-us-social-link text-[27px] font-normal leading-[37.8px] text-left text-black block">Linkedin</a>
                            <a href="/" className="contact-us-social-link text-[27px] font-normal leading-[37.8px] text-left text-black block">Twitter</a>
                            <a href="/" className="contact-us-social-link text-[27px] font-normal leading-[37.8px] text-left text-black block">Webflow</a>
                            <a href="/" className="contact-us-social-link text-[27px] font-normal leading-[37.8px] text-left text-black block">Figma</a>
                        </div>

                    </div>


                    {/* CONTAINER RIGHT */}
                    <div className="contact-us-container-right w-[630px]">

                        <div className="contact-us-container-right-title">
                            <h2 className="text-6xl font-medium leading-[72px] text-left text-black pb-[37px]">Let's build something cool together</h2>
                        </div>

                        <div className="contact-us-form-container">
                            <form action="/" method="post">
                                <div className="contact-us-name pb-8">
                                    <label className="text-[18px] font-normal leading-[28.8px] text-left text-black" htmlFor="name">Name</label><br />
                                    <input className="border-t-0 border-x-0 border-b border-solid border-black w-[624px] pb-3 pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:opacity-60 placeholder:text-dark-gray placeholder:text-left placeholder:leading-[37.8px]" type="text" placeholder="James Albert" name="name" />
                                </div>
                                <div className="about-us-name pb-8">
                                    <label className="text-[18px] font-normal leading-[28.8px] text-left text-black" htmlFor="email">Email</label><br />
                                    <input className="border-t-0 border-x-0 border-b border-solid border-black w-[624px] pb-3 pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:opacity-60 placeholder:text-dark-gray placeholder:text-left placeholder:leading-[37.8px]" type="text" placeholder="ayush.barnwal@brightscout.com" name="email" />
                                </div>
                                <div className="about-us-name pb-8">
                                    <label className="text-[18px] font-normal leading-[28.8px] text-left text-black" htmlFor="subject">Subject</label><br />
                                    <input className="border-t-0 border-x-0 border-b border-solid border-black w-[624px] pb-3 pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:opacity-60 placeholder:text-dark-gray placeholder:text-left placeholder:leading-[37.8px]" type="text" placeholder="For web design work Enquire" name="subject" />
                                </div>
                                <div className="about-us-message pb-8"><br />
                                    <label className="text-[18px] font-normal leading-[28.8px] text-left text-black" htmlFor="message">Message</label>
                                    <textarea className="h-[158px] w-[624px] border-t-0 border-x-0 border-b border-solid border-black pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:leading-[37.8px] placeholder:text-left placeholder:text-dark-gray placeholder:opacity-60" name="message" id="about-message" placeholder="Type your Message"></textarea>
                                </div>
                            </form>
                            <div className="submit-btn w-[193px] h-[70px] flex justify-center items-center bg-black rounded-[170px]">
                                <a className="text-off-white text-[18px] font-medium leading-[21.6px] text-left block" href="/">Submit</a>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <div className="about-us-footer w-screen h-[190px] bg-black py-20 px-20">
                    <FooterBottom />
                </div>
            </div>
        </>
    )
}

export default ContactPage