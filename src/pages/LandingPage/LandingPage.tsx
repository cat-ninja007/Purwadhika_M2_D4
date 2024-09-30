
import Jumbotron from "../../components/Jumbotron"
import RecentWork from "../../components/RecentWork"
import ImageSlider from "../../components/ImageSlider"
import Testimonial from "../../components/Testimonial"
import Footer from "../../components/Footer"

const LandingPage = () => {
    return (

        <div className="overflow-x-hidden">
            <Jumbotron />
            <RecentWork />
            <ImageSlider />
            <Testimonial />
            <Footer />
        </div>

    )
}

export default LandingPage