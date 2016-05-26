$(function () {
    $('#hello').on('keyup', function (event) {
        if (event.keyCode === 13) {
            console.log(event.target.value);
            SC.initialize({
                client_id: 'b7b0b906f719303677f1268c3d52b07b'
            });
            // find all tracks with the genre 'punk' that have a tempo greater than 120 bpm.
            SC.get('/tracks', {
                //filtre pour le retour des variables
                q: event.target.value, bpm: {from: 120}
            }).then(function (tracks) {
                var random = Math.floor(Math.random() * tracks.length);
                console.log(tracks[0].attachments_uri);
                SC.oEmbed(tracks[random].permalink_url,{
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
                    $('#result').text(transcript);
                    var inputs = document.querySelectorAll('.recherche');
                    var words = transcript.split(' ');
                    for (var j = 0; j < inputs.length; j++) {
                        inputs[j].value = words[j];
                    }
                }
            }
            console.log(transcript);
            SC.initialize({
                client_id: 'b7b0b906f719303677f1268c3d52b07b'
            });
            SC.get('/tracks',{ auto_play: true },{
                //filtre pour le retour des variables
                q: transcript, bpm: {from: 120}
            }).then(function (tracks) {
                var random = Math.floor(Math.random() * tracks.length);
                console.log(tracks[0].attachments_uri);
                SC.oEmbed(tracks[random].permalink_url,{
                    element: document.getElementById('putTheWidgetHere')
                });
            });
        }
    }
});

