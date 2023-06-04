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
    const thumbnails = response.data.data;
    const imageUrls = thumbnails.map(thumbnail => thumbnail.imageUrl);
    return imageUrls;
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

// Put the asset id you want to scrape the thumbnail from
const assetIds = [439945661];
fetchAssetThumbnails(assetIds)
  .then(imageUrls => {
    if (imageUrls) {
      console.log('Image URLs:', imageUrls);
    } else {
      console.log('Thumbnail fetching failed.');
    }
  })
  .catch(error => {
    console.log('Thumbnail fetching failed:', error);
  });
