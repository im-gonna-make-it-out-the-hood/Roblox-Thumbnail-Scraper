const axios = require('axios');

async function fetchAssetThumbnails(assetIds) {
  const apiUrl = 'https://thumbnails.roblox.com/v1/assets';

  const params = {
    assetIds: assetIds.join(','),
    returnPolicy: 'PlaceHolder',
    size: '420x420',
    format: 'Png',
    isCircular: false
  };

  try {
    const response = await axios.get(apiUrl, { params });
    return response.data.data;
  } catch (error) {
    if (error.response) {
      
      console.log('Request failed with status:', error.response.status);
      console.log('Error message:', error.response.data);
    } else {
      
      console.log('Request failed:', error.message);
    }
    return null;
  }
}


const assetIds = [439945661];
fetchAssetThumbnails(assetIds)
  .then(thumbnails => {
    if (thumbnails) {
      console.log('Thumbnail data:', thumbnails);
    } else {
      console.log('Thumbnail fetching failed.');
    }
  })
  .catch(error => {
    console.log('Thumbnail fetching failed:', error);
  });
