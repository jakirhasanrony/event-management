import moment from 'moment';
const Header = () => {
    return (
        <div className="mx-auto shadow-lg mb-6">
            <div className="flex justify-center items-center">
                <img src="https://i.ibb.co/kD6qRYy/photo-2023-10-06-20-47-44.png"
                    alt="" />
            </div>
            <div className='p-4  mt-[-20px] grid grid-cols-1 gap-3 lg:grid-cols-2'>
                <p className=" text-center font-bold text-xl">Unlocking Potential and Fostering Growth Through a Multifaceted Portfolio of Educational and Training Events</p>
                <p className='text-center font-bold text-xl flex justify-center items-center'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
           
        </div>
    );
};

export default Header;