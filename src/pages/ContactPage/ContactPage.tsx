import { FC } from "react"
import Navigation from "../../components/Navigation"
import FooterBottom from "../../components/FooterBottom"
import AyushContact from '../../assets/images/Ayush-Contact.png'

import { useFormik } from "formik"
import * as Yup from 'yup';

interface IFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}


const ContactPage: FC = () => {

    const formik = useFormik<IFormValues>({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
          },
          validationSchema: Yup.object({
            name: Yup.string()
                .max(100, 'Must be 100 character or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            subject: Yup.string()
                .max(100, 'Must be 100 character or less')
                .required('Required'),
            message: Yup.string()
                .max(500, 'Must be 500 character or less')
                .required('Required')

          }),
          onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
          }
    })


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
                            <form action="/" method="post" onSubmit={formik.handleSubmit}>
                                <div className="contact-us-name pb-8">
                                    <label className="text-[18px] font-normal leading-[28.8px] text-left text-black" htmlFor="name">Name</label><br />
                                    <input 
                                        // className="border-t-0 border-x-0 border-b border-solid border-black w-[624px] pb-3 pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:opacity-60 placeholder:text-dark-gray placeholder:text-left placeholder:leading-[37.8px]" 
                                        className={`border-t-0 border-x-0 border-b border-solid border-black w-[624px] pb-3 pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:opacity-60 placeholder:text-dark-gray placeholder:text-left placeholder:leading-[37.8px] ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                                        id="name"
                                        type="text" 
                                        placeholder="James Albert" 
                                        // name="name" 
                                        {...formik.getFieldProps('name')}
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        // value={formik.values.name}
                                    />
                                    {
                                        formik.touched.name && formik.errors.name ?
                                            <div className="text-red-500">{formik.errors.name}</div>
                                            :
                                            null
                                    }
                                </div>
                                <div className="about-us-name pb-8">
                                    <label className="text-[18px] font-normal leading-[28.8px] text-left text-black" htmlFor="email">Email</label><br />
                                    <input 
                                        className={`border-t-0 border-x-0 border-b border-solid border-black w-[624px] pb-3 pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:opacity-60 placeholder:text-dark-gray placeholder:text-left placeholder:leading-[37.8px] ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                                        id="email"
                                        type="email" 
                                        placeholder="ayush.barnwal@brightscout.com" 
                                        {...formik.getFieldProps('email')}
                                        // name="email"
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur} 
                                        // value={formik.values.email}
                                    />
                                    {
                                        formik.touched.email && formik.errors.email ?
                                            <div className="text-red-500">{formik.errors.email}</div>
                                            :
                                            null
                                    }
                                </div>
                                <div className="about-us-name pb-8">
                                    <label className="text-[18px] font-normal leading-[28.8px] text-left text-black" htmlFor="subject">Subject</label><br />
                                    <input 
                                        className={`border-t-0 border-x-0 border-b border-solid border-black w-[624px] pb-3 pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:opacity-60 placeholder:text-dark-gray placeholder:text-left placeholder:leading-[37.8px] ${formik.touched.subject && formik.errors.subject ? 'border-red-500' : ''}`}
                                        id="subject"
                                        type="text" 
                                        placeholder="For web design work Enquire" 
                                        {...formik.getFieldProps('subject')}
                                        // name="subject" 
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        // value={formik.values.subject}
                                    />
                                    {
                                        formik.touched.subject && formik.errors.subject ?
                                        <div className="text-red-500">{formik.errors.subject}</div>
                                        :
                                        null
                                    }
                                </div>
                                <div className="about-us-message pb-8"><br />
                                    <label className="text-[18px] font-normal leading-[28.8px] text-left text-black" htmlFor="message">Message</label>
                                    <textarea
                                        // className="h-[158px] w-[624px] border-t-0 border-x-0 border-b border-solid border-black pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:leading-[37.8px] placeholder:text-left placeholder:text-dark-gray placeholder:opacity-60"
                                        className={`h-[158px] w-[624px] border-t-0 border-x-0 border-b border-solid border-black pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:leading-[37.8px] placeholder:text-left placeholder:text-dark-gray placeholder:opacity-60 ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
                                        id="about-message"
                                        placeholder="Type your Message"
                                        {...formik.getFieldProps('message')}
                                        // name="message"  
                                        // onChange={formik.handleChange}
                                        // onBlur={formik.handleBlur}
                                        // value={formik.values.message} 
                                        ></textarea>
                                        {formik.touched.message && formik.errors.message ? ( // Ensure this checks for the correct property
                                        <div className="text-red-500">{formik.errors.message}</div>
                                        ) : null}
                                </div>
                                <button 
                                    type="submit"
                                    className="submit-btn px-[68.5px] py-6 bg-black rounded-[170px] text-off-white text-[18px] font-medium leading-[21.6px]" 
                                >Submit</button>
                            </form>
                            {/* <div className="submit-btn w-[193px] h-[70px] flex justify-center items-center bg-black rounded-[170px]">
                                <a className="text-off-white text-[18px] font-medium leading-[21.6px] text-left block" href="/">Submit</a>
                            </div> */}
                            
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