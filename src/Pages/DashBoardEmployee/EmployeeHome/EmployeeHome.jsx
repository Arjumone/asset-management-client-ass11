import useAuth from "../../../hooks/useAuth";
import { useState, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const EmployeeHome = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [customRequests, setCustomRequests] = useState([]);

    useEffect(() => {
        axiosPublic.get(`/assetItems?userId=${user.id}`)
            .then(response => {
                setCustomRequests(response.data);
            })
            .catch(error => {
                console.error('Error fetching custom requests', error);
            });
    }, [user.id, axiosPublic]);

    return (
        <div>
            <h2 className=" text-center my-3 font-bold ">Welcome  {user.displayName}</h2>

            {/* My Custom Requests Section */}
            <h3 className=" text-center text-3xl font-bold my-4">My Custom Requests</h3>
            {customRequests.length > 0 ? (
                <ul className=" grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {customRequests.map(request => (
                        <li key={request.id}>
                            <p>Asset Name: {request.asset_name}</p>
                            <p>Price: {request.asset_price}</p>
                            <p>Type: {request.asset_type}</p>
                            <p>Status: {request.availability}</p>
                            <button className=" btn bg-orange-200">View Details</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No custom requests found</p>
            )}
        </div>
    );
};

export default EmployeeHome;
