

const Team = ({member}) => {
    return (
        <div>
            <li className=" bg-slate-500 gap-6">
                            <img className=" w-20 h-20 rounded-full" src={member.photoURL} alt={member.name} />
                            <p>Name: {member.name}</p>
                            <p>Member Type: {member.role}</p>
                        </li>
        </div>
    );
};

export default Team;