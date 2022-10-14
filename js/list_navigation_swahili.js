let counter=0;
let items = Array('Mfumo wa uendeshaji wa biashara', 'Mfumo wa uendeshaji wa shule', 'Mfumo wa Taaluma ya Wanafunzi', 'Mfumo wa Usimamizi wa Hoteli', 'Blogi');
let items_list = document.getElementsByClassName("list");
let interval = setInterval(function(){
    $("#content-list-items").append("<li class='list'><a href=''>"+items[counter]+"</a></li>");
    counter++;
    if (counter == items.length) {
        clearInterval(interval);
    }
}, 100);