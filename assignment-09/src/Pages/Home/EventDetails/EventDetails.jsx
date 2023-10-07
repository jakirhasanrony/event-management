import { useParams } from "react-router-dom";


const EventDetails = () => {
    const { id } = useParams();
    return (
        <div className="h-[65vh]">
           <div>
            
           </div>
            <div>
                <h2 className="text-5xl">{id}</h2>
            </div>
        </div>
    );
};

export default EventDetails;
