const api_key="u2tXL4wQEEJaa0E6OKHgypM1jhEthjjs"
const searchEndpoint = "api.giphy.com/v1/gifs/search"

let searchQuery = "knowledge"

fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchQuery}`)
    .then((response) => {
        var results = response.data;

          // Looping over every result item
          for (var i = 0; i < 1 ; i++) {

              var gifDiv = $("<div>");

              // Storing the result item's rating
              var rating = results[i].rating;

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + rating);

              // Creating an image tag
              var personImage = $("<img>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              personImage.attr("src", results[i].images.fixed_height.url);

              // Appending the paragraph and personImage we created to the "gifDiv" div we created
              gifDiv.append(p);
              gifDiv.append(personImage);

              // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
              $("#gifs-appear-here").prepend(gifDiv);
            }
          })

