/**
 * Created by constantin on 05/06/2016.
 */
// Fonction Ajax qui incremente les données en fonction du clic
function incrementData() {
    var id = $(this).children('input').val();
    console.log(id);
    $.ajax({
        url: '/api/up/' + id,
        type: "GET",
        success: function (data) {
            console.log('ajax call success!');
        },
        error: function (xhr, text, err) {
            console.log('error: ', err);
            console.log('text: ', text);
            console.log('xhr: ', xhr);
        }
    });
}