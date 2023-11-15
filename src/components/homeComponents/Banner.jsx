import banner_1 from './../../assets/images/banner-1.jpg'

const Banner = () => {
    return (
        <div className="hero h-[280px]" style={{ backgroundImage: `url(${banner_1})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Build Your Career</h1>
                    <p className="mb-5">Happy Journey..! Best Of Luck</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;