 

import { useState, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Request from './Request';


const RequestForAnAsset = () => {
  const axiosPublic = useAxiosPublic();
  const [assets, setAssets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');
  const [assetTypeFilter, setAssetTypeFilter] = useState('');
  const [selectedAsset, setSelectedAsset] = useState(null);
  console.log(selectedAsset);

  useEffect(() => {
    fetchAssets();
  }, [searchTerm, availabilityFilter, assetTypeFilter]);

  const fetchAssets = async () => {
    try {
      const response = await axiosPublic.get(`/assetItems?name=${searchTerm}&availability=${availabilityFilter}&assetType=${assetTypeFilter}`);
      setAssets(response.data);
    } catch (error) {
      console.error('Error fetching assets', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAvailabilityFilter = (event) => {
    setAvailabilityFilter(event.target.value);
  };

  const handleAssetTypeFilter = (event) => {
    setAssetTypeFilter(event.target.value);
  };

 
    if (assets.availability === 'out_of_stock') {
      return;
    }
  

  return (
    <div>
      <div>
        <input type="text" className=' border-2 my-3 mx-3' placeholder="Search by name" onChange={handleSearch} />
        <select onChange={handleAvailabilityFilter} className=' border-2 mx-3'>
          <option value="allAvailable">All</option>
          <option value="available">Available</option>
          <option value="out_of_stock">Out Of Stock</option>
        </select>
        <select onChange={handleAssetTypeFilter} className=' border-2 mx-3'>
          <option value="allType">All</option>
          <option value="returnable">Returnable</option>
          <option value="non_returnable">Non-returnable</option>
        </select>
      </div>
      <div>
        <ul className='bg-slate-500 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
          {assets.map((asset) => (
            <Request key={asset._id} asset={asset} selectedAsset={selectedAsset} setSelectedAsset={setSelectedAsset} ></Request>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default RequestForAnAsset;