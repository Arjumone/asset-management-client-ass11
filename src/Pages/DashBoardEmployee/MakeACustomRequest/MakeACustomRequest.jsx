import  { useState, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const MakeACustomRequest = () => {
  const axiosPublic = useAxiosPublic();
  const [assetItems, setAssetItems] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [whyYouNeedThis, setWhyYouNeedThis] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');

  useEffect(() => {
    axiosPublic.get('/assetItems')
      .then(response => {
        setAssetItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching asset items', error);
      });
  }, [axiosPublic]);

  const handleRequestAsset = (assetId) => {
    console.log(assetId);
    const requestData = {
      assetId: assetId,
      whyYouNeedThis: whyYouNeedThis,
      additionalInformation: additionalInformation,
      requestDate: new Date().toISOString()
    };
    console.log(requestData);

    axiosPublic.post('/requests', requestData)
      .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error('Error storing the request', error);
      });
  };

  const handleAssetSelect = (assetName) => {
    const selected = assetItems.find(asset => asset.asset_name === assetName);
    // console.log(selected);
    setSelectedAsset(selected);
  };

  return (
    <div>
      <form>
        <div className='text-center'>
          <label htmlFor="assetSelect">Select Asset:</label>
          <select id="assetSelect" onChange={(e) => handleAssetSelect(e.target.value)}>
            <option className='font-bold' value="">Select an asset</option>
            {assetItems.map(asset => (
              <option key={asset._id} value={asset.asset_name}>{asset.asset_name}</option>
            ))}
          </select>
        </div>
        {selectedAsset && (
          <div>
            <h2 className='text-2xl font-bold'>Asset Details</h2>
            <p>Name: {selectedAsset.asset_name}</p>
            <p>Price: {selectedAsset.asset_price}</p>
            <p>Type: {selectedAsset.asset_type}</p>
            <p>Quantity: {selectedAsset.asset_quantity}</p>
            <p>Availability: {selectedAsset.availability}</p>
          </div>
        )}
        <div>
          <label htmlFor="whyYouNeedThis">Why you need this:</label>
          <input className='border-2 my-2' type="text" id="whyYouNeedThis" value={whyYouNeedThis} onChange={(e) => setWhyYouNeedThis(e.target.value)} />
        </div>
        <div>
          <label htmlFor="additionalInformation">Additional information:</label>
          <textarea className='border-2 items-center' id="additionalInformation" value={additionalInformation} onChange={(e) => setAdditionalInformation(e.target.value)} />
        </div>
        <button className='btn bg-orange-300' onClick={() => handleRequestAsset(selectedAsset._id)}>Request</button>
      </form>
    </div>
  );
};

export default MakeACustomRequest;
