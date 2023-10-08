
const EventFullInfo = ({event}) => {
    const {name} = event;
    console.log(event)
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default EventFullInfo;