function validerFormulaire() {
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let message = document.getElementById('message').value;
    let errorName = document.getElementById('nameError');
    let errorFirstname = document.getElementById('firstnameError');
    let errorMessage = document.getElementById('messageError');
if (nom=="") {
    errorName.innerHTML="Mettez un nom valide"
} else {
    errorName.innerHTML=""
}
if (prenom=="") {
    errorFirstname.innerHTML="Mettez un prenom valide"
} else {
    errorFirstname.innerHTML=""
}
if (message=="") {
    errorMessage.innerHTML="Mettez un message valide"
} else {
    errorMessage.innerHTML=""
}
    }