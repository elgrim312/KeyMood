console.log("hello");
$(function () {
    $('#hello').on('keyup',function (event) {
        if (event.keyCode === 13 ) {
            console.log(event.target.value);
            SC.initialize({
                client_id: 'b7b0b906f719303677f1268c3d52b07b'
            });
            // find all tracks with the genre 'punk' that have a tempo greater than 120 bpm.
            SC.get('/tracks', {
                order: event.target.value, bpm: { from: 120 }
            }).then(function(tracks) {
                console.log(tracks[0].attachments_uri);
                SC.oEmbed(tracks[6].permalink_url, {
                    element: document.getElementById('putTheWidgetHere')
                });
                console.log(tracks);
            });
        }
    })
});