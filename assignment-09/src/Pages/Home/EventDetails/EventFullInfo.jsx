
const EventFullInfo = ({ event }) => {
    const { name, image, description, buttonText, price, id, more_description } = event;
    return (

        <div className=" ">
            <div className="border-t-8 shadow-lg mb-4">

            </div>
           
            <div className="p-10 mx-auto max-w-6xl flex justify-center items-center">
                <div className="card shadow-lg h-[850px] glass">
                    <figure><img src={image} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold my-3 text-center text-gray-500">{name}</h2>
                        <p className="text-center">{more_description}</p>
                        <div className="mx-auto my-4">
                            <p className="text-xl font-bold">Price For This Seminar: <span>{price}</span></p>
                        </div>
                        <div className="shadow-lg border-t-8">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventFullInfo;