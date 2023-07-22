function formatDateTo12HourFormat(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return formattedHours + ":" + formattedMinutes + " " + ampm;
}

var date = new Date();
var day = date.getDay();
var month = date.getMonth();
switch(month){
    case 0: month = "January"; break;
    case 1: month = "February"; break;
    case 2: month = "March"; break;
    case 3: month = "April"; break;
    case 4: month = "May"; break;
    case 5: month = "June"; break;
    case 6: month = "July"; break;
    case 7: month = "August"; break;
    case 8: month = "September"; break;
    case 9: month = "October"; break;
    case 10: month = "November"; break;
    case 11: month = "December"; break;
}
switch(day){
    case 0: day = "Sunday"; break;
    case 1: day = "Monday"; break;
    case 2: day = "Tuesday"; break;
    case 3: day = "Wednesday"; break;
    case 4: day = "Thursday"; break;
    case 5: day = "Friday"; break;
    case 6: day = "Saturday"; break;
}
const formattedDate = formatDateTo12HourFormat(date);
document.getElementById("date").innerHTML = formattedDate + " - " + day + ", " + date.getDate() + " " + month + " " + date.getFullYear();