// start quant la page est prête
$(function () {
// prend les valeurs dans les inputs,  au click sur le  button ou  sur Keypress (ENTRER)
    $('#hello').on('keyup', function (event) {
        if (event.keyCode === 13) {
            console.log(event.target.value);
// inicialisation  de l' API SoundCloud
            SC.initialize({
                client_id: 'b7b0b906f719303677f1268c3d52b07b'
            });
            /* prend les valeurs des input est les passent dans (q), qui fait une  recherche par mot, peut êtres changer
             *   q, tags, filter, license ... pour plsu de d'information sur le contenue que renvoit le player go :
             *   (https://developers.soundcloud.com/docs/api/reference#tracks, rubrique FILTER)
             * */
            SC.get('/tracks', {
                q: event.target.value, bpm: {from: 120}
            }).then(function (tracks) {
                var random = Math.floor(Math.random() * tracks.length);
                console.log(tracks[0].attachments_uri);
// insert le player dans la  div #putTheWidgetHere
                SC.oEmbed(tracks[random].permalink_url, {
                    element: document.getElementById('putTheWidgetHere')
                });
            });
        }
    });


//Speech Recognition
// Test si le navigateur est compatible avec Web Speech API
    if ('webkitSpeechRecognition' in window) {

        var recognition = new webkitSpeechRecognition();
        recognition.lang = "fr-FR";
        var text = '';
        recognition.continuous = false;
        recognition.interimResults = true;
        // Début enregistrement vocal
        $('#background').click(function () {
            recognition.start();
            $('#result').text();
        });
        // Récuperation des mots
        recognition.onresult = function (event) {
            $('#result').text('');
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {

                    recognition.stop();
                    var transcript = event.results[i][0].transcript;
                    var inputs = document.querySelectorAll('.recherche');
                    var words = transcript.split(' ');
                    var tab = [];
// rentre dans un tableau les 3 mots tab[j]
                    for (var j = 0; j < inputs.length; j++) {
                        inputs[j].value = words[j];
                        tab[j] = words[j];
                    }
// sort un nombre aléatoire en  fonction de la taille du tableau
                    var random_Tab = Math.floor(Math.random() * tab.length);
// prend un mot dans l'index
                    var result_Finale = tab[random_Tab];
                }
            }
// init le player pour la recherche vocal
            if (result_Finale != undefined) {
                SC.initialize({
                    client_id: 'b7b0b906f719303677f1268c3d52b07b'
                });
                SC.get('/tracks', {
                    //filtre pour le retour des variables
                    q: result_Finale, bpm: {from: 120}
                }).then(function (tracks) {
                    console.log(tracks);
                    var random = Math.floor(Math.random() * tracks.length);
                    if (tracks.length > 0) {
                        SC.oEmbed(tracks[random].permalink_url, {
                            element: document.getElementById('putTheWidgetHere')
                        });
// si les mots rechercher return un  tableau vide alors affiche ...                         
                    } else {
                        $('#result').text("try again");
                    }
                });
            }
        };
    }

    //@todo Ajax avec trigger des inputs pour injection dans la DB
    $('#ajax').on('click', function (event) {
        var obj = {
            //@todo injecter de facon dynamique les datas
            mot1: 'ajax',
            mot2: 'marche',
            mot3: 'pas trop mal'
        };
        var URL = '/api/data';
        $.ajax({
            url: URL,
            type: "POST",
            data: JSON.stringify(obj),
            contentType: "application/json",
            success: function (data) {
                console.log('ajax call success');
            },
            error: function (xhr, text, err) {
                console.log('error: ', err);
                console.log('text: ', text);
                console.log('xhr: ', xhr);
                console.log("probleme :(");
            }
        });
    });
});

