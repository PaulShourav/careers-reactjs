

const HeadingSignInUp = ({headingtTitle}) => {
    return (
        <div className="flex flex-col items-center mb-7">
            <p className="font-bold text-2xl ">{headingtTitle}</p>
            <div className="flex gap-4 mt-3">
                <div className="flex items-center">
                    <div className="bg-indigo-500 w-28 h-[6px] rounded-full "></div>
                    <div className="bg-violet-500 w-4 h-4 rounded-full -ms-3"></div>
                </div>

                <div className="flex items-center">
                    <div className="bg-violet-500 w-4 h-4 rounded-full "></div>
                    <div className="bg-indigo-500 w-28 h-[6px] rounded-full -ms-3 "></div>

                </div>
            </div>
        </div>
    );
};

export default HeadingSignInUp;