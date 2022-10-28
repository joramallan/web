function whatsapp(){
    var customerName = $("#customer_name").val();
    var textMessage = $("#message").val();
    var site = encodeURI("https://joramallan.github.io/web");
    if (customerName == "" || textMessage == "") {
        $(".info-message").show(300).text("It looks like the form is not filled completely");
        setTimeout(function(){
            $(".info-message").hide(300);
        }, 7000);
        return;
    }
    customerName = encodeURI("_From *" + customerName + "*_") + "%0A%0A";
    textMessage = encodeURI(textMessage) + "%0A%0A";
    changeText();
    //var fullMessage = "```"+textMessage+"``` *"+customerName+"*";
    var fullMessage = customerName + textMessage + site;
    // window.location="https://api.whatsapp.com/send?phone=+255752112544&text="+fullMessage;
    window.location="https://wa.me/255752112544?text="+fullMessage;
}

function changeText(){
    $("#sendBtn").text("Loading WhatsApp..");
        setTimeout(function(){
            $("#sendBtn").text("Send");
            $("#customer_name").val("");
            $("#message").val("");
    }, 5000);
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
