// start quant la page est prête
$(function () {
    if ('webkitSpeechRecognition' in window) {

        var recognition = new webkitSpeechRecognition();
        recognition.lang = "fr-FR";
        recognition.continuous = false;
        recognition.interimResults = true;
        // Début enregistrement vocal
        $('#test').click(function () {
            console.log("hello");
            recognition.start();
        });
        // Récuperation des mots
        recognition.onresult = function (event) {
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    recognition.stop();
                    var transcript = event.results[i][0].transcript;
                    var inputs = document.querySelectorAll('input');
                    var words = transcript.split(' ');
                    console.log(words);
                    var tab = [];
                    // rentre dans un tableau les 3 mots tab[j]
                    for (var j = 0; j < inputs.length; j++) {
                        if (words[j] != undefined) {
                            inputs[j].value = words[j];
                            tab[j] = words[j];
                            console.log(tab[j]);
                        }
                    }
                }
            }
        };
    }
});