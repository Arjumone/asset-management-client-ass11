// AddAnEmployee.jsx
import { useState, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const AddAnEmployee = () => {
    const axiosPublic = useAxiosPublic();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axiosPublic.get('/users');
            setUsers(response.data);
        };

        fetchUsers();
    }, [axiosPublic]);

    const removeFromTeam = async (userId) => {
        await axiosPublic.delete(`/users/${userId}`);
        setUsers(users.filter(user => user._id !== userId));
    };

    return (
        <div>
            <h1>Team Members</h1>
            <ul className='gap-6 grid grid-cols-1 lg:grid-cols-10'>
                {users.map((user, index) => (
                    <li key={index}>
                        <div className='bg-lime-200 bg-cover p-5'>
                            <img className='rounded-full w-20 h-20' src={user.photoURL} alt={user.name} />
                            <p>Name: {user.name}</p>
                            <p>Member Type: {user.role}</p>
                            <button className='btn bg-red-400 pr-1' onClick={() => removeFromTeam(user.id)}>Remove From Team</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddAnEmployee;
