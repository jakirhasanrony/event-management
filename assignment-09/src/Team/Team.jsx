import { Link } from "react-router-dom";

const Team = () => {
    return (
        <div data-aos="fade-down">
            <div className="my-10 border-8 max-w-6xl shadow-lg mx-auto rounded-lg">
                <h2 className="text-3xl rounded-lg mx-4 mt-8 py-5  md:text-4xl lg:text-6xl font-bold text-center shadow-lg ">Our Team, Our Pride</h2>
                <div className=" flex gap-5  p-6 justify-center items-center flex-wrap">
                    <div className="card h-[750px] w-96 glass">
                        <figure><img src="https://i.ibb.co/VV8xNk8/photo-2023-10-08-18-17-14.jpg" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold my-3 text-center text-gray-500">Instructor David Martinez</h2>
                            <p className="text-center">Instructor David Martinez is a highly qualified expert in the field of data science. With a Masters degree in Computer Science and years of hands-on experience, he possesses a deep understanding of data analysis, machine learning, and statistical modeling. His passion for data-driven decision-making has driven him to excel in this rapidly evolving field.</p>
                            <div className="shadow-lg border-t-8">
                            </div>

                        </div>
                    </div>
                    <div className="card h-[750px] w-96 glass">
                        <figure><img src="https://i.ibb.co/Ks01nQv/photo-2023-10-08-18-20-50.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold my-3 text-center text-gray-500">Dr. Michael Smith</h2>
                            <p className="text-center">Dr. Michael Smith is a distinguished expert in the dynamic and ever-evolving world of digital marketing. With a background in medicine, his unique blend of analytical thinking and creative innovation sets him apart in the digital marketing landscape. Dr. Smith holds a medical degree, thorough this he understand the human behavior and decision-making processes.</p>
                            <div className="shadow-lg border-t-8">
                            </div>

                        </div>
                    </div>
                    <div className="card h-[750px] w-96 glass">
                        <figure><img src="https://i.ibb.co/9NfLLVf/photo-2023-10-08-18-21-30.jpg" alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold my-3 text-center text-gray-500">Instructor Kevin Anderson</h2>
                            <p className="text-center">Instructor Kevin Anderson is a highly skilled and passionate professional with a Bachelor of Fine Arts in Photography. With years of experience in the field, he has honed his expertise in the art of capturing moments, telling stories through images, and creating stunning visual compositions. Kevin has journey into the world of photography began with a deep fascination for the power of visual storytelling.</p>
                            <div className="shadow-lg border-t-8">
                            </div>

                        </div>
                    </div>
                    <Link to="/instructorMore"><button className="btn bg-purple-600 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">See More Instructors</button></Link>

                </div>
            </div>          
        </div>
    );
};

export default Team;