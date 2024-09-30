import LightArrow from '../assets/images/arrow_forward_light.png'

interface IExtLink{
    linkTitle: string;
    category: string;
}

const ExtLink = (props: IExtLink) => {

    const { linkTitle, category } = props;

    return (
        <>
            <div className="recent-work-right flex border-b-[1px] border-solid border-light-gray pb-8 w-[847px] justify-between">
                <div className="recent-work-text">
                    <div className="recent-work-link">
                        <a className='text-6xl font-normal leading-[72.61px] text-left text-black pb-[18px]' href="/">{linkTitle}</a>
                    </div>
                    <div className="recent-work-tag">
                        <p className='text-[18px] font-normal leading-[28.8px] text-left text-dark-gray'>{category}</p>
                    </div>
                </div>

                <div className="recent-work-ext-link">
                    <img src={LightArrow} alt="arrow-forward-light" />
                </div>
            </div>
        </>
    )
}

export default ExtLink;