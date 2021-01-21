const api_key="u2tXL4wQEEJaa0E6OKHgypM1jhEthjjs"
const searchEndpoint = "api.giphy.com/v1/gifs/search"

let searchQuery = "wedding"

fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchQuery}`)
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
    const currentPageData=parsedData.data
    const pageHtml = [];
    currentPageData.forEach(gifData =>{

    const imageHtml = `<img src=${gifData.images.preview_gif.url}/>`
    pageHtml.push(imageHtml);
    });
    document.getElementById('gif-container').innerHTML = pageHtml.join('');
})

