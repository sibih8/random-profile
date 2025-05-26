let apiUrl = "https://randomuser.me/api/";
let userData;


let userImage = document.getElementById("foto-utente");
let userName = document.getElementById("nome-utente");
let userGender = document.getElementById("sesso-utente");
let userAddress = document.getElementById("indirizzo-utente");
let userEmail = document.getElementById("email-utente");
let userPhone = document.getElementById("telefono-utente");
let userCell = document.getElementById("cellulare-utente");
let userDob = document.getElementById("data-nascita-utente");
let userRegistered = document.getElementById("registrato-utente");

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        userData = data.results[0];
        userImage.setAttribute("src", userData.picture.large);
        userName.innerHTML = userData.name.first + " " + userData.name.last;
        userGender.innerHTML = userData.gender === "male" ? "Uomo" : "Donna";
        userAddress.innerHTML = `${userData.location.street.name} ${userData.location.street.number}, ${userData.location.city}`;
        userEmail.innerHTML = userData.email;
        userPhone.innerHTML = userData.phone;
        userCell.innerHTML = userData.cell;
        userDob.innerHTML = new Date(userData.dob.date).toLocaleDateString("it-IT") + ` (${userData.dob.age} anni)`;
        userRegistered.innerHTML = new Date(userData.registered.date).toLocaleDateString("it-IT");
    })
    .catch(function (error) {
        console.log(error);
    });