const date = new Date();

const renderCalendar = () => {
// Figuring out the extra days before and after each month
date.setDate(1);  // Gives the day index

// Testing a different month to make sure the days work
// date.setMonth(5);

const month = date.getMonth();
console.log(month);
// January is index 0

//Get last day of the month
const lastDay = new Date(date.getUTCFullYear(), date.getMonth() + 1, 0).getDate();
console.log(lastDay);

const prevLastDay = new Date(date.getUTCFullYear(), date.getMonth(), 0).getDate();
console.log(prevLastDay);

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
console.log(lastDayIndex);

const nextDays = 7 - lastDayIndex - 1

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
$("#current-month").html(months[date.getMonth]);

$("#current-date").html(date.toDateString());

// dynamically adding days
let days = "";
 // This is how we get the the first day of the month on the 
 // correct day, and the last few days of the previous month
for(let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay -x + 1}</div>`
}

// Highlight current day
for( let i = 1; i <= lastDay; i++) {
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="today">${i}</div>`;
    }else{
        days += `<div>${i}</div>`;
    }
}
// displaying the first few days of the next month
// j = 1 becasue each month begins with 1
for(let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    $(".days").html(days);
}
};


// click event for previous and next months
$(".prev").on("click", function () {
    date.setMonth(date.getMonth() - 1)
    renderCalendar();
}); 

$(".next").on("click", function () {
    date.setMonth(date.getMonth() + 1)
    renderCalendar();
}); 

renderCalendar();

