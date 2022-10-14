let counter=0;
let items = Array('Business Management System', 'School Management System', 'Student Academic System', 'Hotel Management System', 'Blog');
let items_list = document.getElementsByClassName("list");
let interval = setInterval(function(){
    $("#content-list-items").append("<li class='list'><a href=''>"+items[counter]+"</a></li>");
    counter++;
    if (counter == items.length) {
        clearInterval(interval);
    }
}, 100);