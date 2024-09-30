import TestimonialCard from "./TestimonialCard"
import HeadlineLeft from "./HeadlineLeft"
import Ayush from '../assets/images/Ayush Raj.png'
import Alex from '../assets/images/Alex Cattoni.png'

const Testimonial = () => {
    return (
        <>
            <div className="testimonial flex gap-16 pl-20 pr-20 pb-20 justify-between">


                <HeadlineLeft 
                    headline="Testimonial"
                />


                {/* TESTIMONIAL CARD */}
                <div className="testimonial-right w-[839px]">
                    <TestimonialCard 
                        comment="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"
                        image={Ayush}
                        name="Ayush Raj"
                        title="VP of Marketing @ Webflow"
                    />
                    <TestimonialCard 
                        comment="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"
                        image={Alex}
                        name="Alex Cattoni"
                        title="Founder @ CopyPossy"
                    />
                </div>




                
            </div>
        </>
    )
}

export default Testimonial