
const GreetingButton = () => {
    return (
        <>
            <div className="w-[358px] h-[95px] absolute bg-black rounded-[64px_0_0_64px] flex items-center justify-start pl-[33px] gap-7 right-[-250px] top-[278px] transition-all duration-500 ease-in-out hover:right-0 cursor-pointer">
            {/* <div className="w-[358px] h-[95px] bg-black rounded-[64px_0_0_64px] flex items-center justify-start pl-[33px] gap-7"> */}
                <p className="text-[56px] font-medium leading-[67.2px] text-left">👋</p>
                <p className="text-4xl font-medium leading-[48px] text-left text-off-white">Hi I'm Ayush</p>
            </div>
        </>
    )
}

export default GreetingButton;