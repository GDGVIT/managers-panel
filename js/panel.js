$(document).ready(() => {
    $('#signout-button').click(() => {
        eraseCookie();
    })
})

eraseCookie = () => {
    window.location.href="/index.html?"+"signout";
} 