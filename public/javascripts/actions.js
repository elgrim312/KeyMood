// Ensemble des clés
var command = ["ouvre", "cherche", "Wikipédia", "mail", "Facebook"];

// "Clé" : "URL de recherche/action"
var command_link = {
    "cherche": 'https://www.google.com/search?q=',
    "Wikipédia": 'https://fr.wikipedia.org/wiki/',
    "mail": 'https://gmail.com/',
    "Facebook": 'https://facebook.com/'
};

// TODO: intégrer la recherche YouTube

// var api = function(){
//     $.getJSON(
//                 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ transcript.replace('ouvre', '') +' &type=video&key=AIzaSyCa8UQCukYPtTN6m5UXp8-7BzmphkccCuw'
//                 ,
//                 function(data){
//                     window.open('https://www.youtube.com/watch?v='+ data['items'][0].id.videoId,'_blank');
//                 });
// }

// "Clé" : "Réponse de Sherlock"
var command_voice = {
    "cherche": 'Voici les resultats de Google',
    "Wikipédia": 'Voici les resultats Wikipédia',
    "mail": 'Voici vos mail',
    "Facebook": 'Voici vos amis'
};

// Fonction command_action
var command_action = function (key, query) {
    var link = command_link[key] + query;
    window.open(link, "_blank");
    responsiveVoice.speak(command_voice[key], "French Female");
};
