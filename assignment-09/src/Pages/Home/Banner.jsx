import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Banner = () => {
    const [myIndex, setMyIndex] = useState(0);

    useEffect(() => {
        const carousel = () => {
            const x = document.getElementsByClassName("mySlides");
            for (let i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            setMyIndex((prevIndex) => (prevIndex + 1) % x.length);
            x[myIndex].style.display = "block";
        };

        const interval = setInterval(carousel, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [myIndex]);

    return (
        <div>
            <div className=" max-w-6xl mx-auto">
                <div className='p-4 flex justify-center items-center'>
                    <button className="btn text-xl px-12 text-gray-500 font-bold glass ">Our currently available services</button>
                    <Marquee pauseOnHover={true} speed={150} >
                        <Link className='mr-6 font-semibold' >Web Development Bootcamp</Link>
                        <Link className='mr-6 font-semibold' >Data Science Masterclass</Link>
                        <Link className='mr-6 font-semibold' >Digital Marketing Workshop</Link>
                        <Link className='mr-6 font-semibold' >Photography Basics Course</Link>
                        <Link className='mr-6 font-semibold' >Language Learning Program</Link>
                        <Link className='mr-6 font-semibold' >Financial Planning Seminar</Link>
                    </Marquee>
                </div>

                <div className="w3-content w3-section mx-auto " style={{ maxWidth: '50vw' }}>
                    <img className="mySlides rounded-lg" src="https://i.ibb.co/ypdcdz0/photo-2023-10-06-19-07-44.jpg" alt="Los Angeles" />
                    <img className="mySlides rounded-lg" src="https://i.ibb.co/xM7D54X/photo-2023-10-06-19-09-17.jpg" alt="Los Angeles" />
                    <img className="mySlides rounded-lg" src="https://i.ibb.co/gMXQbFP/photo-2023-10-06-19-12-00.jpg" alt="Los Angeles" />
                    <img className="mySlides rounded-lg" src="https://i.ibb.co/QMrkTWP/photo-2023-10-06-19-15-42.jpg" alt="Los Angeles" />
                    <img className="mySlides rounded-lg" src="https://i.ibb.co/1vNDv3V/13243rfgvcv.jpg" alt="Los Angeles" />
                    <img className="mySlides rounded-lg" src="https://i.ibb.co/kB14cfS/photo-2023-10-06-19-26-51.jpg" alt="Los Angeles" />

                </div>
            </div>
            <p className="py-5 shadow-lg"></p>
        </div>
    );
};

export default Banner;