import { FC } from "react"
import Navigation from "../../components/Navigation"
import FooterBottom from "../../components/FooterBottom"
import AyushContact from '../../assets/images/Ayush-Contact.png'

// import { useFormik } from "formik"
import { Formik, Form, useField } from "formik"
import * as Yup from 'yup';

interface IFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface ITextInputProps {
    id: string;
    label: string;
    name: string;
    type: string;
    placeholder?: string;
}

const TextInput: FC<ITextInputProps> = ({ label, ...props }) => {
    const [ field, meta ] = useField(props);
    return(
        <>
            <div className={`contact-us-${props.name} pb-8`}>
                <label 
                    htmlFor={props.id || props.name}
                    className="text-[18px] font-normal leading-[28.8px] text-left text-black"
                    >{label}</label>
                <input 
                    className={`border-t-0 border-x-0 border-b border-solid border-black w-[624px] pb-3 pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:opacity-60 placeholder:text-dark-gray placeholder:text-left placeholder:leading-[37.8px] 
                    ${meta.touched && meta.error ? "border-red-500" : ""}`} 
                    {...field} 
                    {...props} />
                {
                    meta.touched && meta.error ? (
                        <div className="error text-red-500">{meta.error}</div>
                    ) : null
                }
            </div>
        </>
    )
}

interface ITextAreaProps {
    id: string;
    label: string;
    name: string;
    placeholder? : string;
}

const TextArea: FC<ITextAreaProps> = ({ label, ...props}) => {
    const [ field, meta ] = useField(props);
    return (
        <div className={`contact-us-${props.name} pb-8`}>
            <label
                htmlFor={props.id || props.name}
                className="text-[18px] font-normal leading-[28.8px] text-left text-black"
            >{label}</label>
            <textarea
                className={`h-[158px] w-[624px] border-t-0 border-x-0 border-b border-solid border-black pt-3 placeholder:text-[27px] placeholder:font-normal placeholder:leading-[37.8px] placeholder:text-left placeholder:text-dark-gray placeholder:opacity-60 ${
                    meta.touched && meta.error
                      ? "border-red-500"
                      : ""
                  }`}
                {...field} 
                {...props}

            ></textarea>
            {
                meta.touched && meta.error ? ( 
                          <div className="error text-red-500">
                            {meta.error}
                          </div>
                ) 
                : 
                null
            }
        </div>
    )
}


const ContactPage: FC = () => {
    
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
                <p className="contact-title text-[18px] font-normal leading-[28.8px] text-left text-dark-gray">
                  Contact Details
                </p>
                <p className="contact-email text-[27px] font-normal leading-[37.8px] text-left text-black">
                  ayush.barnwal@brightscout.com
                </p>
                <p className="contact-phone text-[27px] font-normal leading-[37.8px] text-left text-black">
                  +91 8651447521
                </p>
              </div>

              <div className="contact-us-social-media">
                <p className="contact-social text-[18px] font-normal leading-[28.8px] text-left text-dark-gray">
                  Social
                </p>
                <a
                  href="/"
                  className="contact-us-social-link text-[27px] font-normal leading-[37.8px] text-left text-black block"
                >
                  Instagram
                </a>
                <a
                  href="/"
                  className="contact-us-social-link text-[27px] font-normal leading-[37.8px] text-left text-black block"
                >
                  Linkedin
                </a>
                <a
                  href="/"
                  className="contact-us-social-link text-[27px] font-normal leading-[37.8px] text-left text-black block"
                >
                  Twitter
                </a>
                <a
                  href="/"
                  className="contact-us-social-link text-[27px] font-normal leading-[37.8px] text-left text-black block"
                >
                  Webflow
                </a>
                <a
                  href="/"
                  className="contact-us-social-link text-[27px] font-normal leading-[37.8px] text-left text-black block"
                >
                  Figma
                </a>
              </div>
            </div>

            {/* CONTAINER RIGHT */}
            <div className="contact-us-container-right w-[630px]">
              <div className="contact-us-container-right-title">
                <h2 className="text-6xl font-medium leading-[72px] text-left text-black pb-[37px]">
                  Let's build something cool together
                </h2>
              </div>

              <div className="contact-us-form-container">
                <Formik
                  initialValues={
                    {
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    } as IFormValues
                  }
                  validationSchema={Yup.object({
                    name: Yup.string()
                      .max(100, "Must be 100 character or less")
                      .required("Required"),
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Required"),
                    subject: Yup.string()
                      .max(100, "Must be 100 character or less")
                      .required("Required"),
                    message: Yup.string()
                      .max(500, "Must be 500 character or less")
                      .required("Required"),
                  })}
                  onSubmit={(values: IFormValues, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400)
                  }}
             
                >
                    <Form>
                        <TextInput
                            id="name" 
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="James Albert"
                        />

                        <TextInput
                            id="email" 
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="ayush.barnwal@brightscout.com"
                        />

                        <TextInput
                            id="subject" 
                            label="Subject"
                            name="subject"
                            type="text"
                            placeholder="For web design work Enquire"
                        />

                        <TextArea
                            id="message" 
                            label="Message"
                            name="message"
                            placeholder="Type Your Message"
                        />
                    </Form>
                </Formik>
              </div>
            </div>
          </div>

          <div className="about-us-footer w-screen h-[190px] bg-black py-20 px-20">
            <FooterBottom />
          </div>
        </div>
      </>
    );
}

export default ContactPage


