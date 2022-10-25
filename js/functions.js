function whatsapp(){
    var customerName = $("#customer_name").val();
    customerName = encodeURI("From " + customerName + " Via Your Website") + "%0A%0A";
    var textMessage = $("#message").val();
    textMessage = encodeURI(textMessage);
    if (customerName == "" || textMessage == "") {
        $(".info-message").show(300).text("It looks like the form is not filled completely");
        setTimeout(function(){
            $(".info-message").hide(300);
        }, 7000);
        return;
    }
    changeText();
    //var fullMessage = "```"+textMessage+"``` *"+customerName+"*";
    var fullMessage = "_*" + customerName + "*_" + textMessage;
    // window.location="https://api.whatsapp.com/send?phone=+255752112544&text="+fullMessage;
    window.location="https://wa.me/255752112544?text="+fullMessage;
    $("#customer_name").val("");
    $("#message").val("");
}

function changeText(){
    $("#sendBtn").text("Loading WhatsApp..");
        setTimeout(function(){
            $("#sendBtn").text("Send Via WhatsApp");
    }, 5000);
}

function mailTo(){
    var email = document.createElement("a");
    email.href = "mailto:joramallan@gmail.com";
    email.click();
}

function instaTo(){
    var instaElem = document.createElement("a");
    instaElem.href = "https://www.instagram.com/joramkingu/";
    instaElem.click();
}

function faceTo(){
    var faceElem = document.createElement("a");
    faceElem.href = "https://web.facebook.com/sunbuct.makala/";
    faceElem.click();
}

function show_list_content(id, e){
    var list_content = $(".list-content");
    if ($("#"+id).is(":visible")) {
        $("#"+id).hide(300);
        $(e).find("img").attr("src", "icon/dwn.png");
    }else{
        $("#"+id).show(300);
        $(e).find("img:nth-child(1)").attr("src", "icon/up.png");
    }
}