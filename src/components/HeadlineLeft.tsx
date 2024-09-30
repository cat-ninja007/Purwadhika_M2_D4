

interface IExtLink {
    headline: string;
}

const HeadlineLeft = (props: IExtLink) => {
    
    const { headline } = props;
    
    return (
        <>
            <div className="w-[367px]">
                <h3>{headline}</h3>
            </div>
        </>
    )
}

export default HeadlineLeft