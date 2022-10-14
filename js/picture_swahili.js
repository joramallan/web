var pictures = ["../image/joram0.png",  "../image/joram2.png"];

var b = 0;

function changeImage(b){
    $("#pic").attr("src", pictures[b]);
}

setInterval(function(){
    if ((b+1)>pictures.length) {b=0;}
    changeImage(b++);
}, 15000);