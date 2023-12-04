import { useState, useEffect } from 'react';
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AssetsList = () => {
  const axiosPublic = useAxiosPublic();
  const [assets, setAssets] = useState([]);
  console.log(assets);
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);
  const [filterOptions, setFilterOptions] = useState({ stockStatus: '', assetType: '' });
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    axiosPublic.get("/assetItems")
      .then(res => {
        setAssets(res.data);
      })
      .catch(error => {
        console.error("Error fetching assets:", error);
      });
  }, [axiosPublic]);

  const filteredAssets = assets
    .filter(asset => asset.asset_name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(asset => filterOptions.stockStatus ? asset.availability === filterOptions.stockStatus : true)
    .filter(asset => filterOptions.assetType ? asset.asset_type === filterOptions.assetType : true)
    .sort((a, b) => sortOption === 'quantity' ? a.asset_quantity - b.asset_quantity : 0);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by product name"
        className=' mb-3'
      />
      <select value={filterOptions.stockStatus} onChange={(e) => setFilterOptions({ ...filterOptions, stockStatus: e.target.value })}>
        <option value="availability">Availability</option>
        <option value="available">Available</option>
        <option value="out_of_stock">Out of Stock</option>
      </select>
      <select value={filterOptions.assetType} onChange={(e) => setFilterOptions({ ...filterOptions, assetType: e.target.value })}>
        <option value="asset_type">All Type</option>
        <option value="returnable">Returnable</option>
        <option value="non_returnable">Non-Returnable</option>
      </select>
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="quantity">Sort by Quantity</option>
        <option value="quantity">Quantity</option>
      </select>
      <div className='gap-6 grid grid-cols-1 lg:grid-cols-4'>
        {filteredAssets.map(asset => (
          <div className='bg-slate-400 text-center p-4 rounded' key={asset.id}>
            <p>Product Name: {asset.asset_name}</p>
            <p>Product Type: {asset.availability}</p>
            <p>Product Type: {asset.asset_type}</p>
            <p>Product Quantity: {asset.asset_quantity}</p>
            <p>Date Added: {asset.dateAdded}</p>
            <button className='btn mr-2 bg-orange-300'>Update</button>
            <button className='btn bg-orange-300'>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetsList;
