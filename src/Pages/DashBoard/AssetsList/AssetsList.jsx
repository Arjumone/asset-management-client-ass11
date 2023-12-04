import { useState, useEffect } from 'react';
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AssetsList = () => {
  const axiosPublic = useAxiosPublic();
  const [assets, setAssets] = useState([]);
  console.log(assets);
  const [searchQuery, setSearchQuery] = useState('');
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
    // .filter(asset => asset.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(asset => filterOptions.stockStatus ? asset.stockStatus === filterOptions.stockStatus : true)
    .filter(asset => filterOptions.assetType ? asset.assetType === filterOptions.assetType : true)
    .sort((a, b) => sortOption === 'quantity' ? a.productQuantity - b.productQuantity : 0);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by product name"
      />
      <select value={filterOptions.stockStatus} onChange={(e) => setFilterOptions({ ...filterOptions, stockStatus: e.target.value })}>
        <option value="">All</option>
        <option value="available">Available</option>
        <option value="out-of-stock">Out of Stock</option>
      </select>
      <select value={filterOptions.assetType} onChange={(e) => setFilterOptions({ ...filterOptions, assetType: e.target.value })}>
        <option value="">All</option>
        <option value="returnable">Returnable</option>
        <option value="non-returnable">Non-Returnable</option>
      </select>
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort by</option>
        <option value="quantity">Quantity</option>
      </select>
      <div>
        {filteredAssets.map(asset => (
          <div key={asset.id}>
            <p>Product Name: {asset.asset_name}</p>
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
