import { useState, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const AllRequests = () => {
    const axiosPublic = useAxiosPublic()
  const [requests, setRequests] = useState([]);
  console.log(requests);

  useEffect(() => {
    axiosPublic.get("/requests")
      .then(response => {
        console.log(response.data);
        setRequests(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [axiosPublic]);

//   const handleSearch = (e) => {
   
//   };

  return (
    <div>
      <h2 className=' text-2xl font-bold my-3'>Request List</h2>
      {/* <input type="text" placeholder="Search by requester name or email" onChange={handleSearch} /> */}
      <ul>
        {requests.map(request => (
          <li key={request.id}>
            <p>Email of requester: {request.userEmail}</p>
            <p>Request Date: {request.requestDate}</p>
            <p>Additional note: {request.additionalNotes}</p>
            <button className=' btn mr-5 bg-red-200'>Approve</button>
            <button className=' btn bg-red-200'>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllRequests;
