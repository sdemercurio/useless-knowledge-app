const api_key="u2tXL4wQEEJaa0E6OKHgypM1jhEthjjs";
const searchEndpoint = "api.giphy.com/v1/gifs/search";
let giphyData = {};

// Sets search query to be "knowledge"
let searchQuery = "knowledge";

// Get gifs from Giphy - We have a limited amount of calls to giphy available
fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchQuery}`)
    .then((response) => {
        if (response.ok) {
            // Pass response as string if successful
            return response.text();
        } else {
            console.log("This Failed?!");
        }
})
.then((responseData) => {
    const parsedData = JSON.parse(responseData);
    const currentPageData = parsedData.data;

    // Makes first page from giphy available outside of this fetch
    giphyData = currentPageData;
});



// Pick a new gif out of giphy data
function updateGif() {
        // Pick a random number between 0 and 50
    const randomNumber = Math.floor(Math.random() * Math.floor(50));

    // Sets the image to be a random image from the giphy api
    const image = giphyData[randomNumber].images.original.url;

    // Attaches image to style attribute of gif container
    document.getElementById('gif').style.backgroundImage=`url(${image})`;
}