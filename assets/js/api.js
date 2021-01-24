const api_key="u2tXL4wQEEJaa0E6OKHgypM1jhEthjjs"
const searchEndpoint = "api.giphy.com/v1/gifs/search"

let searchQuery = "knowledge"

fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchQuery}&limit=1`)
    .then((response) => {
        if (response.ok) {
            console.log(response);
            return response.text()
        } else {
            console.log("This Failed?!");
        }
})
.then((responseData) => {
    const parsedData = JSON.parse(responseData);
    const currentPageData = parsedData.data
    console.log(currentPageData)
    

    const randomNumber = Math.floor(Math.random() * Math.floor(50));
    const image = currentPageData[randomNumber].images.original.url;

    document.getElementById('gif').style.backgroundImage=`url(${image})`;
})

