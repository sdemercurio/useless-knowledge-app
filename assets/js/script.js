$(document).ready(function main () {
    randomFact();
function randomFact() {
    fetch("http://numbersapi.com/random/trivia")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      let fact = data
    $(".randomFactToday").prepend(fact)
    });
// const randomFact = {
//  "async": true,
//  "crossDomain": true,
//  "url": "https://webknox-trivia-knowledge-facts-v1.p.rapidapi.com/trivia/search?topic=knowledge",
//  "method": "GET",
//  "headers": {
//      "x-rapidapi-key": "889e002b8fmsh68a55d24a31d654p1e691ajsn4b5a65ae9eb2",
//      "x-rapidapi-host": "webknox-trivia-knowledge-facts-v1.p.rapidapi.com"
//  }
// };
// // $.ajax(randomFact).done(function (response) {
// //     console.log(response);
// //     console.log(response.trivia[0])
// //     var fact = response.trivia[0]
// //     $(".randomFactToday").prepend(fact)
// });
}
})

