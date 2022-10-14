let date = new Date();
let elem = document.getElementById("date");
let year_elem = document.getElementById("year");
elem.innerHTML=date.toDateString();
year_elem.innerHTML=date.getFullYear();