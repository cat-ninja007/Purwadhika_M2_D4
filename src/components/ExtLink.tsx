import { useState } from 'react';
import LightArrow from '../assets/images/arrow_forward_light.png'
import DarkArrow from '../assets/images/arrow_forward_dark.png'

interface IExtLink{
    linkTitle: string;
    category: string;
}

const ExtLink = (props: IExtLink) => {

    const { linkTitle, category } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div 
                className="recent-work-right flex border-b-[1px] border-solid border-light-gray pb-8 w-[847px] justify-between"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <div className="recent-work-text">
                    <div className="recent-work-link">
                        <a className='text-6xl font-normal leading-[72.61px] text-left text-black pb-[18px]' href="/">{linkTitle}</a>
                    </div>
                    <div className="recent-work-tag">
                        <p className='text-[18px] font-normal leading-[28.8px] text-left text-dark-gray'>{category}</p>
                    </div>
                </div>

                <div className="recent-work-ext-link">
                    <img 
                        src={isHovered ? DarkArrow : LightArrow} 
                        className="transition duration-300"
                        alt="external-link" 
                    
                    />
                </div>
            </div>
        </>
    )
}

export default ExtLink;