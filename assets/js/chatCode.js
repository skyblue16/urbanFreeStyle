
var chats = [
    {
        "name": "Style1678",
        "state": "graffitero chileno",
        "photo": "../assets/img/grafitero1.jpg"
    },
    {
        "name": "MyLifeGraffi",
        "state": "soy como soy ",
        "photo": "../assets/img/grafitero2.jpg"
    },
    {
        "name": "Snoopy167",
        "state": "",
        "photo": "../assets/img/grafitero3.jpg"
    },
]
$(document).ready(function () {

});

//I walk to transform my data in my friends list

for (var i = 0; i < chats.length; i++) {
    var name = chats[i].name;
    var state = chats[i].state;
    $(".guyss-list").append("<div class='guys' id='" +
        [i] + "'><div class='guys-photo' id='guysPhoto" + [i] + "'></div><div class='guys-info'><h5 class='guys-name'>" +
        name + "</h5><p class='guys-state'>" +
        state + "</p></div></div>");
    $("#info-contacts").append("<div class='chat' id='chat" +
        [i] + "'><div class='text-box right-align'></div></div><div class='row clear-margin chat-bottom'><div class='col s11'><input type='text' class='chat-input' id='chat-input" +
        [i] + "' placeholder='Escriba un mensaje aquí'></div><div class='col s1'><i class='fa fa-microphone send right' id='send" +
        [i] + "'></i></div></div>");
    $("#guysPhoto" + [i]).css("background-image", "url(" + chats[i].photo + ")")
    $("#chat" + [i]).hide();
    $("#chat-input" + [i]).hide();
    $("#send" + [i]).hide();
}

//I start at index 0 which is the first friend
$("#chat0").show();
$("#chat-input0").show();
$("#send0").show();
$("#chat-input0").focus();
$(".messageName").text(chats[0].name)
$(".messageInfo").text(chats[0].state)
$(".messagePhoto").css("background-image", "url(" + chats[0].photo + ")")

//initialize index
var index = 0;

//Hide and show chat according to the "position" index of the friend you click
for (var i = 0; i < chats.length; i++) {
    $("#" + [i]).click(function () {
        var guyss = $(this).index();

        //hidden chats
        $(".chat").hide();
        $(".chat-input").hide();
        $(".send").hide();
        $("#chat" + guyss).show();
        $("#chat-input" + guyss).show();
        $("#send" + guyss).show();
        $("#chat-input" + guyss).focus();

        //I overwrite the variable to use in the send
        index = $(this).index();
        $(".messageName").text(chats[guyss].name)
        $(".messageInfo").text(chats[guyss].state)
        $(".messagePhoto").css("background-image", "url(" + chats[guyss].photo + ")")

    })
    //asigno cursor pointer a mis amigos
    $("#" + [i]).css("cursor", "pointer");
    //asigno funcion click a todos mis botrones de enviar
    $("#send" + [i]).click(function () {
        sendMessage();
    })
}
$(document).keypress(function (e) {
    if (e.which == 13) {
        sendMessage();
    }
});

//Filter guyss
$("#search-guys").keypress(function () {
    var searchVal = $("#search-guys").val();
    for (var i = 0; i < chats.length; i++) {
        var guysName = chats[i].name;

    }
});

var sendMessage = function () {
    var text = $("#chat-input" + index).val();
    var container = $("#chat" + index);
    if (text.length > 0) {
        var dt = new Date();
        //hours
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        container.append("<div class='text-box right-align'><div class='text'><p>" +
            text + "</p><p>" + time + "</p></div></div>");
        $("#chat-input" + index).val("");
        $("#chat-input" + index).focus();
    }
};