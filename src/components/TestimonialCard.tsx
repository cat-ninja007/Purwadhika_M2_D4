interface ITestimonialCard {
    comment: string;
    image: string;
    name: string;
    title: string
}

const TestimonialCard = (props: ITestimonialCard) => {
    
    const { comment, image, name, title } = props;
    
    return (
        <>
            <div className="testimonial-card pb-16">
                <div className="testimonial-comment pb-[28px]">
                    <p className="text-[27px] font-extralight leading-[37.8px] text-left">{comment}</p>
                </div>
                <div className="testimonial-profile flex gap-3 items-center">
                    <div className="testimonial-profile-picture">
                        <img src={image} alt={name} />
                    </div>
                    <div className="testimonial-profile-detail">
                        <p className="testimonial-profile-name text-[18px] font-medium leading-[28.8px] text-left">{name}</p>
                        <p className="testimonial-profile-title text-[14px] font-normal leading-[22.4px] text-left">{title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard