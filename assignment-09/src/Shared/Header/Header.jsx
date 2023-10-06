import moment from 'moment';
const Header = () => {
    return (
        <div className="mx-auto shadow-lg mb-6 bg-slate-300 ">
            <div className="flex justify-center items-center">
                <img src="https://i.ibb.co/C1Sch82/photo-2023-10-06-23-06-01-removebg-preview.png"
                    alt="" />
            </div>
            <div className='p-4 md:mx-8 lg:ml-12  grid grid-cols-1 gap-3 lg:grid-cols-2 justify-evenly items-center'>
                <p className="md:ml-16 pb-3 text-center font-bold text-xl">Unlocking Potential and Fostering Growth Through a Multifaceted Portfolio of Educational and Training Events</p>
                <p className='text-center font-bold text-xl pb-3 flex justify-center items-center'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
           
        </div>
    );
};

export default Header;