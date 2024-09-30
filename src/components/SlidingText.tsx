import { motion } from "framer-motion"

const SlidingText = () => {
    return (
        <>
            <div className="sliding-text-container absolute">
                {/* <motion.div 
                    initial={{ x: 0}}
                    animate={{ x: "-100%"}}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear"}}
                    className="sliding-text flex flex-shrink-0 gap-[40px]">
                    <p className="text-[150.38px] flex flex-shrink-0 text-off-white z-10 border-2 border-red-600">Webflow Developer &mdash; UI/UX Designer &mdash; Web Designer </p>
                </motion.div>
                <motion.div 
                    initial={{ x: 0}}
                    animate={{ x: "-100%"}}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear"}}
                    className="sliding-text flex flex-shrink-0 gap-[40px]">
                    <p className="text-[150.38px] flex flex-shrink-0 text-off-white z-10 border-2 border-red-600">Webflow Developer &mdash; UI/UX Designer &mdash; Web Designer </p>
                </motion.div> */}
                    <div className="top-slider flex gap-[40px] pb-10">
                        <motion.div 
                            initial={{ x: 0}}
                            animate={{ x: "-100%" }}
                            transition={{ duration: 18, repeat: Infinity, ease:"linear"}}
                            className="flex flex-shrink-0 gap-[40px] ">
                            <p className="text-[150.38px] flex flex-shrink-0 text-off-white z-10">Webflow Developer &mdash; UI/UX Designer &mdash; Web Designer &mdash;</p>
                        </motion.div>
                        <motion.div 
                            initial={{ x: 0}}
                            animate={{ x: "-100%" }}
                            transition={{ duration: 18, repeat: Infinity, ease:"linear"}}
                            className="flex flex-shrink-0 gap-[40px]">
                            <p className="text-[150.38px] flex flex-shrink-0 text-off-white z-10">Webflow Developer &mdash; UI/UX Designer &mdash; Web Designer &mdash;</p>
                        </motion.div>
                    </div>
            </div>

         
        </>
    )
}

export default SlidingText