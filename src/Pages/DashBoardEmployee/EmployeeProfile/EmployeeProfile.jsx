import { useState } from 'react';
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const EmployeeProfile = () => {
  const { user } = useAuth();
  console.log(user);
  const axiosPublic = useAxiosPublic();
  const [updatedUser, setUpdatedUser] = useState({ name: user.displayName});

  const handleUpdate = async () => {
      const response = await axiosPublic.put(`/users/${user.email}`, updatedUser);
      console.log(response.data);
      setUpdatedUser(response.data)
    
  };

  return (
    <div>
      <label>Full Name:</label>
      <input className='mr-4' type="text" value={updatedUser.name} onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })} />
      <label>Email:</label>
      <input type="text" value={user.email} readOnly />
      <button className=' btn bg-red-200 ml-4' onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EmployeeProfile;
