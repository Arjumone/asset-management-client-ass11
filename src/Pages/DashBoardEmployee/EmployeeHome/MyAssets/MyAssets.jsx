import  { useState, useEffect } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';

const MyAssets = () => {
    const axiosPublic = useAxiosPublic();
    const [searchName, setSearchName] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [assetList, setAssetList] = useState([]);

    useEffect(() => {
        const fetchAssetItems = async () => {
            try {
                const response = await axiosPublic.get(`/assetItems?search=${searchName}&type=${filterType}`);
                setAssetList(response.data);
            } catch (error) {
                console.error('Error fetching asset list', error);
            }
        };

        fetchAssetItems();
    }, [axiosPublic, searchName, filterType]);

    return (
        <div>
            <input type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} placeholder="Search by asset name" />

            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                <option value="allType">All Types</option>
                <option value="returnable">Returnable</option>
                <option value="non_returnable">Non-Returnable</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>Asset Name</th>
                        <th>Asset Type</th>
                    </tr>
                </thead>
                <tbody>
                    {assetList.map(asset => (
                        <tr key={asset.id}>
                            <td>{asset.asset_name}</td>
                            <td>{asset.asset_type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyAssets;
