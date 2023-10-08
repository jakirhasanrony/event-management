import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EventFullInfo from "./EventFullInfo";

const EventDetails = () => {
    const [event, setEvent] = useState({});
    const { id } = useParams();
    const allEvents = useLoaderData();
    console.log(allEvents)
    useEffect(() => {
        const findEvent = allEvents?.find(event => event.id == id)
        console.log(findEvent)
        setEvent(findEvent);

    }, [id, allEvents]);
    console.log(event)
    return (
        <div className="mx-auto py-9">
            <EventFullInfo event={event}></EventFullInfo>

        </div>
    );
};

export default EventDetails;
