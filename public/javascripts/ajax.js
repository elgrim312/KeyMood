/**
 * Created by constantin on 05/06/2016.
 */
// Fonction Ajax qui incremente les données en fonction du clic
function incrementData() {
    var id = $(this).children('input').val();
    $.ajax({
        url: '/api/up/' + id,
        type: "PUT",
        error: function (xhr, text, err) {
            console.log('error: ', err);
            console.log('text: ', text);
            console.log('xhr: ', xhr);
        }
    });
}