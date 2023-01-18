import axios from 'axios';

// make sure the GET request is async/await
// this request uses axios
// use a term variable that users type in as an argument, so that the response from the GET request shows that they search for

const searchImages = async(term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID fSucGgorlWFCXxIWuKFXv8nx6my2zZYbFU4VffHCUoo',
        },
        params: {
            query: `${term}`
        },
    });

    //return specifically the data results, not the entire response object
    // .data.results is based on the structure of the object returned from the successful GET request
    console.log(response.data.results);
    return response.data.results;
};

export default searchImages;