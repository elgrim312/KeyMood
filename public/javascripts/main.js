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

                    // Majuscules à chaques mots (recherche wikipédia)
                    var words = transcript.split(' ');
                    for (var j = 1; j < words.length; ++j) {
                        words[j] = words[j].charAt(0).toUpperCase() + words[j].substring(1).toLowerCase();
                    }

                    // Lancement de command_action si la clé existe
                    for (var i = 0; i < command.length; i++) {
                        if (command[i] == words[0]) {
                            command_action(words[0], transcript.replace(words[0], ''));
                        }
                    }

                    $('#result').text(transcript);

                } else {
                    $('#result').text($('#result').text() + event.results[i][0].transcript);
                }
            }
        };
        // Efface la saisie
        recognition.onend = function () {
            window.setTimeout(function () {
                $('#result').text('');
            }, 2000);
        };
    }
});