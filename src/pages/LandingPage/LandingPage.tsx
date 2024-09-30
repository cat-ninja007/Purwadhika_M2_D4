import Jumbotron from "../../components/Jumbotron"
import Navigation from "../../components/Navigation"
import HiddenMenu from "../../components/HiddenMenu"
import About from "../../components/About"
import RecentWork from "../../components/RecentWork"
import ImageSlider from "../../components/ImageSlider"
import Testimonial from "../../components/Testimonial"
import Footer from "../../components/Footer"

const LandingPage = () => {
    return (

        <div className="overflow-x-hidden">
            {/* <h1>Hi! This is My landing Page</h1> */}
            <Navigation />
            <Jumbotron />
            {/* <HiddenMenu /> */}
            <About />
            <RecentWork />
            <ImageSlider />
            <Testimonial />
            <Footer />
        </div>

    )
}

export default LandingPage