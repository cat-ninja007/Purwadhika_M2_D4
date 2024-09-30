import { motion } from "framer-motion"


const ImageSlider = () => {
    const sliderTop = [
        "/work-1-1.png",
        "/work-1-2.png",
        "/work-2-2.png",
        "/work-2-3.png",
    ]

    const sliderBottom = [
        "/work-1-1.png",
        "/work-1-2.png",
        "/work-2-2.png",
        "/work-2-3.png",
    ]

    return (
        <div className="container pb-28">
            {/* TOP */}
            <div className="top-slider flex gap-[40px] pb-10">
                <motion.div 
                    initial={{ x: 0}}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 18, repeat: Infinity, ease:"linear"}}
                    className="flex flex-shrink-0 gap-[40px] ">
                    {sliderTop.map((image, index) => {
                        return <img className="border-2 shadow-2xl py-14 px-12 bg-light-gray" src={image} key={index} alt="slider-image" />
                    })}
                </motion.div>
                <motion.div 
                    initial={{ x: 0}}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 18, repeat: Infinity, ease:"linear"}}
                    className="flex flex-shrink-0 gap-[40px]">
                    {sliderTop.map((image, index) => {
                        return <img className="border-2 shadow-2xl py-14 px-12 bg-light-gray" src={image} key={index} alt="slider-image" />
                    })}
                </motion.div>
            </div>


            {/* BOTTOM */}
            <div className="top-slider  flex gap-[40px] pb-10">
                <motion.div 
                    initial={{ x: 0}}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 25, repeat: Infinity, ease:"linear"}}
                    className="flex flex-shrink-0 gap-[40px] ">
                    {sliderBottom.map((image, index) => {
                        return <img className="border-2 shadow-2xl py-14 px-12 bg-light-gray" src={image} key={index} alt="slider-image" />
                    })}
                </motion.div>
                <motion.div 
                    initial={{ x: 0}}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 25, repeat: Infinity, ease:"linear"}}
                    className="flex flex-shrink-0 gap-[40px]">
                    {sliderBottom.map((image, index) => {
                        return <img className="border-2 shadow-2xl py-14 px-12 bg-light-gray" src={image} key={index} alt="slider-image" />
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default ImageSlider