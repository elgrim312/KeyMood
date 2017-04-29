/**
 * Created by alexandrevagnair on 03/06/2016.
 */
var title =  $('title').html();
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
};
// example.com?param1=name&param2=&id=6
var mot1 =$.urlParam('mot1'); // name
var mot2 =$.urlParam('mot2'); // name
var mot3 =$.urlParam('mot3'); // name
var tab = {mot1, mot2, mot3};
var data_prepare = JSON.stringify(tab);
$.ajax({
    method : 'POST',
    contentType: "application/json",
    url : 'https://constsynf.pagekite.me/api/songs',
    data : data_prepare
})
    .done(function (result) {
        console.log(result);
        var arraydatakey = {
            artist_name : result.data.artists.items[0].name,
            follo : result.data.artists.items[0].followers.total,
            img : {
                url : result.data.artists.items[0].images[0].url,
                url_sound : result.data.artists.items[0].uri
            }
        };
        console.log(arraydatakey);
        var widget = $('#putTheWidgetHere');
        widget.css( 'background-image','url('+arraydatakey.img.url+')' );
        $('iframe').attr('src', "https://open.spotify.com/embed?uri="+arraydatakey.img.url_sound);
        $('#play-button').trigger('click',function () {
            console.log("click")
        });

    });