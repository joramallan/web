var myArray = ["Halo, Karibu kwenye tovuti yangu", "Naitwa Joram, mtaalam wa Kompyuta", "Angalia maelezo zaidi hapa chini", "Karibu sana"];
var annoElem = document.getElementById("anno");
let shaker;
let i = 0;

annimateAnnouncement();

function annimateAnnouncement(){
    clearInterval(shaker);
    annoElem.style.color = "yellow";
    annoElem.innerHTML = "";
    var annoArray = myArray[i].split('');
    var annoArrayLength = annoArray.length;
    let j = 0;

    var myInterval = setInterval(annText, 50);

    function annText(){
        annoElem.innerHTML = annoElem.innerHTML + annoArray[j++];

        if ((j+1) > annoArrayLength) {
            clearInterval(myInterval);
            shakeElement();
            ++i;
            if ((i+1) > myArray.length) {
                i = 0;
            }
            setTimeout(annimateAnnouncement, 2000);
        }
    }

    function shakeElement(){
        let k=0;
        shaker = setInterval(() => {
            if (k++%2 == 0) {
                annoElem.style.color = "yellow";
            }else{
                annoElem.style.color = "black";
            }
        }, 60);
    }
}