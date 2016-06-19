/**
 * Created by constantin on 05/06/2016.
 */
// Fonction Ajax qui incremente les données au clic
function incrementData() {
    var categorie = $(this).prev('input').data('categorie');
    $.ajax({
        url: '/api/up/' + categorie,
        type: "GET",
        error: function (xhr, text, err) {
            console.log('error: ', err);
            console.log('text: ', text);
            console.log('xhr: ', xhr);
        }
    });
}