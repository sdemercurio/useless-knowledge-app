const date = new Date();

const priorMonth = new Date();
priorMonth.setDate(1);
priorMonth.setMonth(priorMonth.getMonth()-1);

const nextMonth = new Date();
nextMonth.setDate(1);
nextMonth.setMonth(nextMonth.getMonth()+1);

const renderCalendar = () => {
  // Figuring out the extra days before and after each month
  date.setDate(1); // Gives the day index

  // Testing a different month to make sure the days work
  // date.setMonth(5);

  const month = date.getMonth();
  console.log(month);
  // January is index 0

  //Get last day of the month
  const lastDay = new Date(
    date.getUTCFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  console.log(lastDay);

  const prevLastDay = new Date(
    date.getUTCFullYear(),
    date.getMonth(),
    0
  ).getDate();
  console.log(prevLastDay);

  //the block that the first day of the month lands on. Begins with index 0
  const firstDayIndex = date.getDay();
  console.log(date.getDay());

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  console.log(lastDayIndex);

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Using .getMonth method to display the months
  $("#current-month").html(months[date.getMonth()]);

  $("#current-date").html(new Date().toLocaleDateString());
  console.log(new Date().toLocaleDateString());

  // dynamically adding days
  let days = "";
  console.log(days);
  // This is how we get the the first day of the month on the
  // correct day, and the last few days of the previous month
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date" data-month="${priorMonth.getMonth() + 1}" data-day="${prevLastDay - x + 1}">${prevLastDay - x + 1}</div>`;
    // <div data-month="01" data-day="23"></div>
  }

  // Highlight current day
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today" data-month="${date.getMonth() + 1}" data-day="${i}">${i}</div>`;
    } else {
      days += `<div data-month="${date.getMonth() + 1}" data-day="${i}">${i}</div>`;
    }
  }
  // displaying the first few days of the next month
  // j = 1 becasue each month begins with 1
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date" data-month="${nextMonth.getMonth() + 1}" data-day="${j}">${j}</div>`;
    
  }
  $(".days").html(days);
};

// click event for previous and next months
$(".prev").on("click", function () {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

$(".next").on("click", function () {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

// document.querySelectorAll(".days").forEach(days => {
//     days.addEventListener("click", event => {
//         console.log(event.currentTarget)
//     })
// })

//====================== WIKIPEDIA API =====================================

// function searchup(s){
//     var ids = "";
//     var links = [];
//     var results = [];
//     fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch='+s)
//     .then(response => {
//     return response.json();
//     })
//     .then(result => {
//     results = result.query.search;
//     for(var i=0; i<results.length; i++){
//     if(results[i+1] != null){
//     ids += results[i].pageid+"|";
//     }
//     else{
//     ids+=results[i].pageid;
//     }
//     }
//     })
//     .then(a => {
//     fetch("https://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&origin=*&format=json&pageids="+ids)
//     .then(idresult => {
//     return idresult.json();
//     })
//     .then(idresult =>{
//     for(i in idresult.query.pages){
//     links.push(idresult.query.pages[i].fullurl);
//     }
//     })
//     .then(g =>{
//     document.getElementById("output").innerHTML="";
//     for(var i=0; i<results.length; i++){
//     document.getElementById("output").innerHTML+="<a href='"+links[i]+"' target='_blank'>"+results[i].title+"</a><br>"+results[i].snippet+"<br>";
//     }
//     });
//     });

//     }

// =============================== NUMBERS API ==================================
// let queryURL = "http://numbersapi.com/01/22/date";
//     console.log(queryUrl);

function showCalFacts() {

    $(".days").on("click", function(event) {
        let dataMonth = $(event.target).attr("data-month");
        let dataDay = $(event.target).attr("data-day");
          
      
  // Change param to "date-selected" or something
  // fetch(`http://numbersapi.com/${select-date}date`)
  fetch("http://numbersapi.com/" + dataMonth + "/" + dataDay + "/date")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);

      let factDiv = $("<div>").addClass("card col-3-lg");
      let factInfo = $("<p>").addClass("fact-display").html(data);

      factDiv.append(factInfo);
      $("#date-fact").append(factDiv);

    });
    $("#date-fact").html("");
});
}

showCalFacts();

function getNumFacts() {
  let input = $("#input").val();

  fetch(`http://numbersapi.com/${input}`)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);

      let numFactDiv = $("<div>").addClass("card col-3-lg");
      let numFactInfo = $("<p>").addClass("num-fact-display").html(data);

      numFactDiv.append(numFactInfo);
      $("#input-fact").append(numFactDiv);
      
    });
   
}

// Search Button
//=======================================================
$("#search").on("click", function () {
  let search = "";
  search = $("#input").val();

  $("#input").empty();

  getNumFacts(search);
});


