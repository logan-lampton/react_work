import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID fSucGgorlWFCXxIWuKFXv8nx6my2zZYbFU4VffHCUoo'
        },
        params: {
            query: 'dragons'
        }
    });

    console.log(response);
    return response;
};

export default searchImages;