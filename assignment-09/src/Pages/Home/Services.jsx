import { Link } from "react-router-dom";

const Services = ({ card }) => {
    const { name, image, description, buttonText, price ,id } = card;
 
    return (
        <div  >
            <div className="card h-[550px]  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title  text-gray-500 font-bold">{name}</h2>
                    <p className=" text-gray-500 font-semibold">{description}</p>
                    <p className=" text-gray-500 font-bold">Price: {price}</p>
                    <div   className="card-actions">
                        <Link to={`/card/${id}`}><button className="btn btn-primary">{buttonText}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;