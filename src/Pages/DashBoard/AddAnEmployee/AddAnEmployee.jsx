import  { useState, useEffect } from 'react';
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddAnEmployee = () => {
  const axiosPublic = useAxiosPublic();
  const [packageLimit, setPackageLimit] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosPublic.get("/package/limit")
      .then(res => {
        setPackageLimit(res.data.limit);
      })
      .catch(error => {
        console.error("Error fetching package limit:", error);
      });

    axiosPublic.get("/users/not-employees")
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, [axiosPublic]);

  const increasePackageLimit = () => {
    // Logic to increase the package limit
    // Redirect to the page with package options
  };

  const addToTeam = (userId) => {
    // Logic to add the user to the team
    // Increase the team member count by one
  };

  return (
    <div>
      <h2>Package Section</h2>
      <p>Product Count: ...</p>
      <p>Package Limit: {packageLimit}</p>
      <button onClick={increasePackageLimit}>Increase Limit</button>

      <h2>Users Not in Any Team</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <input type="checkbox" onChange={() => addToTeam(user.id)} />
            <img src={user.image} alt={user.name} />
            <p>Name: {user.name}</p>
            <p>Member Type: {user.type}</p>
            <button onClick={() => addToTeam(user.id)}>Add to Team</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddAnEmployee;
