import HeadlineLeft from "./HeadlineLeft"
import ExtLink from "./ExtLink"


const RecentWork = () => {
    return (
        <>
            <div className="recent-work flex gap-16 pl-20 pr-20 pb-20 justify-between">

                <HeadlineLeft 
                    headline="Recent Work"
                />



                {/* External Link */}
                <div className="list-recent-work-right w-[839px] pl-5 flex flex-col gap-8">
                    <ExtLink 
                        linkTitle="Decodable.co"
                        category="Brand Design - Webflow Development - Web Design"
                    />
                    <ExtLink 
                        linkTitle="Fogirefly.io"
                        category="Brand Design - Webflow Development - Web Design"
                    />
                    <ExtLink 
                        linkTitle="Blinkops.com"
                        category="Brand Design - Webflow Development - Web Design"
                    />
                    <ExtLink 
                        linkTitle="Withkanvas.com"
                        category="Brand Design - Webflow Development - Web Design"
                    />
                </div>


            </div>
        </>
    )
}

export default RecentWork