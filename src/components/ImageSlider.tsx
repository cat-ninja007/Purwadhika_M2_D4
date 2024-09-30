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






// // import WorkOne from '../assets/images/work-1-1.png'
// // import WorkTwo from '../assets/images/work-1-2.png'
// // import WorkThree from '../assets/images/work-1-3.png'
// // import WorkFour from '../assets/images/work-1-4.png'

// // const imagePaths: string[] = [
// //     './assets/images/work-1-1.png',
// //     './assets/images/work-1-2.png',
// //     './assets/images/work-1-3.png',
// //     './assets/images/work-1-4.png',
// //   ];

// const ImageSlider = () => {
//     return (
//         <>
//             <div className="image-slider-container py-20 w-full h-[813px] border-2 border-red-700">

//                 {/* <div>
//                     {
//                         imagePaths.map((path, index) => (
                    
//                         ))
//                     }
//                 </div> */}
                
//                 {/* TOP */}
//                 {/* <div className="flex justify-center items-center overflow-x-hidden">
//                     <div className="image-slider-top border-2 border-green-500 h-[306px] mb-[41px] mr-12 flex gap-x-12 animate-loop-scroll">
//                         <div className="image-item py-14 px-12 bg-light-gray max-w-none shrink-0">
//                             <img src={WorkOne} alt="image-work" />
//                         </div>
//                         <div className="image-item py-14 px-12 bg-light-gray max-w-none shrink-0">
//                             <img src={WorkTwo} alt="image-work" />
//                         </div>
//                         <div className="image-item py-14 px-12 bg-light-gray max-w-none shrink-0">
//                             <img src={WorkThree} alt="image-work" />
//                         </div>
//                         <div className="image-item py-14 px-12 bg-light-gray max-w-none shrink-0">
//                             <img src={WorkFour} alt="image-work" />
//                         </div>
//                     </div>
//                 </div> */}

//                 <div className="image-slider-bottom border-2 border-purple-500 h-[306px]"></div>
//             </div>
//         </>
//     )
// }

// export default ImageSlider