$(function () {
    $('#hello').on('keyup',function (event) {
        if (event.keyCode === 13 ) {
            console.log(event.target.value);
            SC.initialize({
                client_id: 'b7b0b906f719303677f1268c3d52b07b'
            });
            // find all tracks with the genre 'punk' that have a tempo greater than 120 bpm.
            SC.get('/tracks', {
                //filtre pour le retour des variable 
                q: event.target.value, bpm: { from: 120 }
            }).then(function(tracks) {
                var random = Math.floor(Math.random()*tracks.length);
                console.log(tracks[0].attachments_uri);
                SC.oEmbed(tracks[random].permalink_url, {
                    element: document.getElementById('putTheWidgetHere')
                });
            });
        }
    })
});

