

const Event = ({event}) => {
    return (
        <div>
            <li className=" bg-red-300">
                            <img className=" w-20 h-20 rounded-full"  src={event.photoURL} alt={event.name} />
                            <p>Name: {event.name}</p>
                            <p>Date of Birth: {event.dateOfBirth}</p>
                            <p>Remaining Days: {event.remainingDays}</p>
                        </li>
        </div>
    );
};

export default Event;