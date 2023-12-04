// import  { useState } from 'react';
// import useAxiosPublic from "../../../hooks/useAxiosPublic";

// const Request = ({ asset, selectedAsset, setSelectedAsset }) => {
//   const axiosPublic = useAxiosPublic();
//   const [additionalNotes, setAdditionalNotes] = useState('');

//   const handleRequestConfirmation = async () => {
//     try {
//       const requestData = {
//         asset: selectedAsset,
//         user: {
//           name: 'Arju', // Replace with actual user name
//           email: 'arju@example.com', // Replace with actual user email
//           role: 'HR/Admin', // Replace with actual user role
//         },
//         requestDate: new Date(),
//         additionalNotes: additionalNotes,
//       };

//       const response = await axiosPublic.post('/requests', requestData);
//       console.log(response.data); // Log the response from the server
//     } catch (error) {
//       console.error('Error requesting asset', error);
//     }
//   };

//   const handleAdditionalNotesChange = (event) => {
//     setAdditionalNotes(event.target.value);
//   };

//   return (
//     <>
//       <li className="border-4 p-4 text-white" key={asset._id}>
//         <h1>Asset Name: {asset.asset_name}</h1>
//         <h1>Asset Type: {asset.asset_type}</h1>
//         <h1>Availability: {asset.availability}</h1>
//         <button
//           onClick={() => document.getElementById("my_modal_2").showModal()}
//           className="btn bg-orange-200"
//           disabled={asset.availability === "out_of_stock"}
//         >
//           Request
//         </button>
//       </li>
//       <dialog id="my_modal_2" className="modal">
//         <div className="modal-box">
//           {/* <h3 className="font-bold text-lg">Request Asset: {selectedAsset.asset_name}</h3> */}
//           <p>Press ESC key or click outside to close</p>
//           <input
//             type="text"
//             value={additionalNotes}
//             onChange={handleAdditionalNotesChange}
//             placeholder="Additional notes"
//             className="border-2 p-2"
//           />
//           <button onClick={handleRequestConfirmation} className='btn bg-orange-300 mr-3'> Confirm Request</button>
//           <button onClick={() => (document.getElementById('my_modal_2').close(), setSelectedAsset(null))} className='btn bg-orange-300'>Close</button>
//         </div>
//       </dialog>
//     </>
//   );
// };

// export default Request;


import { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const RequestForAnAsset = ({ asset, setSelectedAsset }) => {
  const axiosPublic = useAxiosPublic();
  const {user} = useAuth();
//   console.log(user);
  const [additionalNotes, setAdditionalNotes] = useState('');

  const handleRequestConfirmation = async () => {
    

      const requestData = {
        assetId: asset._id,
        userEmail: user.email,
        requestDate: new Date(),
        additionalNotes: additionalNotes
      };

      const requestResponse = await axiosPublic.post('/requests', requestData);
      if(requestResponse.data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Request added successfully",
            showConfirmButton: false,
            timer: 1500
          });
      }
    
  };

  const handleAdditionalNotesChange = (event) => {
    setAdditionalNotes(event.target.value);
  };

  return (
    <>
      <li className="border-4 p-4 text-white" key={asset._id}>
        <h1>Asset Name: {asset.asset_name}</h1>
        <h1>Asset Type: {asset.asset_type}</h1>
        <h1>Availability: {asset.availability}</h1>
        <button
          onClick={() => document.getElementById('my_modal_2').showModal()}
          className="btn bg-orange-200"
          disabled={asset.availability === 'out_of_stock'}
        >
          Request
        </button>
      </li>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          
          <input
            type="text"
            value={additionalNotes}
            onChange={handleAdditionalNotesChange}
            placeholder="Additional notes"
            className="border-2 p-2"
          />
          <button onClick={handleRequestConfirmation} className="btn bg-orange-300 mr-3">
             Request
          </button>
          <button onClick={() => (document.getElementById('my_modal_2').close(), setSelectedAsset(null))} className="btn bg-orange-300">
            Close
          </button>
        </div>
      </dialog>
    </>
  );
};

export default RequestForAnAsset;
