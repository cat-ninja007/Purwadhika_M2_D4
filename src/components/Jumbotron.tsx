import JumbotronImg from '../assets/images/jumbotron-img.png'
import Navigation from './Navigation';
import GreetingButton from './GreetingButton';
import SlidingText from './SlidingText';

const Jumbotron = () => {
    return (

        <>
            <div className='w-screen relative h-[700px] bg-light-gray flex items-end justify-center'>
                <div className="navigation absolute top-[26px] left-0 right-0">
                    <Navigation />
                </div>
                <div className='bg-transparent'>
                    <img className='w-[501px] h-[654.37px]' src={JumbotronImg} alt="jumbotron-image" />
                </div>
                {/* <div className='absolute transition-all duration-500 ease-in-out hover:right-0 cursor-pointer overflow-hidden border-2 border-solid border-red-500'> */}
                    <GreetingButton />
                {/* </div> */}
                    <SlidingText />
            </div>
        </>
    )
}

export default Jumbotron;