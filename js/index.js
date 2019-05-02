var provider = new firebase.auth.GoogleAuthProvider();

$(document).ready( () => {

    if(window.location.href.indexOf("signout") > -1) {
        document.cookie =  "token=undefined"
        checkCookie();
    }
    else{
        checkCookie();
    }

    $('#submit-button').click( () => {
        var email =  document.getElementById('sigin-email').value
        var password = document.getElementById('sigin-password').value
        firebase.auth().signInWithEmailAndPassword(email, password).then( (response) => {
            cookieToken(response.user.uid)
            checkCookie();
        }).catch( (error) => {
            document.getElementById('error-display').innerHTML = error.message

            checkCookie();
        })
    })

    $('#google-login-button').click(() => {
        firebase.auth().signInWithRedirect(provider).then(function(result) {
            console.log(result)
            checkCookie();
        }).catch(function(error) {
            document.getElementById('error-display').innerHTML = error.message
            checkCookie();
        });
    })

})

let cookieToken = (tokenValue) => {
    document.cookie= "token=" + tokenValue;
}

var getCookie = (name) => {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
};

checkCookie = () => {
    var token = getCookie('token')
    if(token != 'undefined'){
        window.location.href="managers-panel/panel.html?" + token;
    }
}   