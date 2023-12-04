

import { useState, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const CustomRequestsList = () => {
    const axiosPublic= useAxiosPublic()
    const [requests, setRequests] = useState([]);
    const [assetItems, setAssetItems] = useState([]);

    useEffect(() => {
        const fetchAssetItems = async () => {
            const response = await axiosPublic.get('/assetItems');
            setAssetItems(response.data);
        };

        const fetchRequests = async () => {
            const response = await axiosPublic.get('/requests');
            setRequests(response.data);
        };

        fetchAssetItems();
        fetchRequests();
    }, [axiosPublic]);

    return (
        <div>
            <h1 className=' text-center text-3xl font-bold my-5'>Custom Requests List</h1>
          
           <ul className=' grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {assetItems.map((asset) => (
                    <li key={asset._id}>
                        <div>
                            <p>Name: {asset.asset_name}</p>
                            <p>Price: {asset.asset_price}</p>
                            <p>Type: {asset.asset_type}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <ul  className=' grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {requests.map((request) => (
                    <li key={request._id}>
                        <div>
                            <p>Type: {request.userEmail}</p>
                            <p>Reason: {request.whyYouNeedThis}</p>
                            <p>Additional Info: {request.additionalNotes}</p>
                            <button className=' btn bg-orange-200 mr-4'>Approved</button>
                            <button className=' btn bg-orange-200 mr-4'>Reject</button>
                        </div>
                    </li>
                ))}
            </ul>
           
           
        </div>
    );
};

export default CustomRequestsList;
