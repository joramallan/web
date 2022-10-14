var myArray = ["Halo, Karibu kwenye wavuti yangu", "Ninatengeneza programu ikiwemo..", "Tovuti za kibinafsi", "Mfumo ya Uendeshaji wa Biashara", "Mfumo ya taarifa za wanafunzi", "Mfumo wa kukata tiketi ya basi", "Mfumo wa kuhifadhi taarifa za wafanyakazi", "Mfumo wa uendeshaji wa hoteli", "Blogi n.k", "Tazama maelezo zaidi hapa chini", "Unakaribishwa"];
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