/**
 * Created by alexandrevagnair on 03/06/2016.
 */
var title =  $('title').html();
console.log(title);
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
};
// example.com?param1=name&param2=&id=6
var mot1 =$.urlParam('mot1'); // name
var mot2 =$.urlParam('mot2'); // name
var mot3 =$.urlParam('mot3'); // name
var tab = [mot1, mot2, mot3];
console.log(tab);
var random_Tab = Math.floor(Math.random() * tab.length);
// prend un mot dans l'index
var result_Finale = tab[random_Tab];
console.log(result_Finale);
if (result_Finale != undefined) {
    SC.initialize({
        client_id: 'b7b0b906f719303677f1268c3d52b07b'
    });
    SC.get('/tracks', {
        //filtre pour le retour des variables
        q: result_Finale, bpm: {from: 120}
    }).then(function (tracks) {
        console.log(tracks);
        console.log('genre musical ' + tracks[0].genre);
        console.log(tracks.length);
        var random = Math.floor(Math.random() * tracks.length);
        if (tracks.length > 0) {
            var url = tracks[random].permalink_url;
            SC.oEmbed(url, {
                element: document.getElementById('putTheWidgetHere'),
                auto_play: true,
                show_comments : false
            });
            // si les mots rechercher return un  tableau vide alors affiche ...
        } else {
            $('#result').text("try again");
        }
    });
}
