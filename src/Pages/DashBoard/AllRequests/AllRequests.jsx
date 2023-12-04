

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const AllRequests = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     axios.get(`/requests?searchQuery=${searchQuery}`)
//       .then(response => {
//         setRequests(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching requests', error);
//       });
//   }, [searchQuery]);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <div>
//       <h2>Request List</h2>
//       <input type="text" placeholder="Search by requester name or email" onChange={handleSearch} />
//       <ul>
//         {requests.map(request => (
//           <li key={request.id}>
//             <p>Asset Name: {request.assetName}</p>
//             <p>Asset Type: {request.assetType}</p>
//             <p>Email of requester: {request.requesterEmail}</p>
//             <p>Name of requester: {request.requesterName}</p>
//             <p>Request Date: {request.requestDate}</p>
//             <p>Additional note: {request.additionalNote}</p>
//             <p>Status: {request.status}</p>
//             <button>Approve</button>
//             <button>Reject</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AllRequests;



const AllRequests = () => {
    return (
        <div>
            req
        </div>
    );
};

export default AllRequests;