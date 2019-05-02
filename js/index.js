document.cookie = "token=undefined"

var provider = new firebase.auth.GoogleAuthProvider();

$(document).ready( () => {
    
    $('#submit-button').click( () => {
        var email =  document.getElementById('sigin-email').value
        var password = document.getElementById('sigin-password').value
        firebase.auth().signInWithEmailAndPassword(email, password).then( (response) => {
            cookieToken(response.user.uid)
        }).catch( (error) => {
            document.getElementById('error-display').innerHTML = error.message
        })
    })

    $('#google-login-button').click(() => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            cookieToken(result.credential.accessToken)
          }).catch(function(error) {
            document.getElementById('error-display').innerHTML = error.message
          });
    })

})

let cookieToken = (tokenValue) => {
    document.cookie= "token=" + tokenValue;
}