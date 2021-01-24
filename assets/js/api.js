const api_key="u2tXL4wQEEJaa0E6OKHgypM1jhEthjjs";
const searchEndpoint = "api.giphy.com/v1/gifs/search";

// Sets search query to be "knowledge"
let searchQuery = "knowledge";

// Does GET XHR request for giphy API for searchQuery
fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchQuery}`)
    .then((response) => {
        if (response.ok) {
            console.log(response);
            // Pass response as string if successful
            return response.text();
        } else {
            console.log("This Failed?!");
        }
})
.then((responseData) => {
    const parsedData = JSON.parse(responseData);
    const currentPageData = parsedData.data;
    console.log(currentPageData);
    
    // Pick a random number between 0 and 50
    const randomNumber = Math.floor(Math.random() * Math.floor(50));

    // Sets the image to be a random image from the giphy api
    const image = currentPageData[randomNumber].images.original.url;

    // Attaches image to style attribute of gif container
    document.getElementById('gif').style.backgroundImage=`url(${image})`;
})
