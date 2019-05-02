$(document).ready(() => {
    $('#signout-button').click(() => {
        eraseCookie();
    })

    var ref = firebase.app().database().ref();
    ref.once('value', function (snapshot) {
        displayEvents(snapshot.val().toDoList);
    });

})

eraseCookie = () => {
    window.location.href = "/index.html?" + "signout";
} 

let displayEvents = (eventsList) => {

    var eventsListArray = Object.values(eventsList)

    eventsListArray.forEach((event) => {
        $('.events-holder').append('<div class="event"><h3 class="event-heading">'+event.name+'</h3><h5 class="event-date">'+event.date+'</h5><div></div></div>')
    })

}