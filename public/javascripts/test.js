// AJOUT CONCERTS
var concerts = [
    {date : ['13-15','juill. 2016'],place: ['Musilac','Aix-les-bains (73)']},
    {date : ['10-12','mars 2017'],place: ['We love green','Paris (75)']},
    {date : ['11-13','oct. 2018'],place: ['Gararock','Marmande (47)']},
    {date : ['24-26','aout 2016'],place: ['Vieilles Charrues','La Rochelle (17)']},
    {date : ['12-14','juill. 2016'],place: ['Eurockeennes','Belfort (90)']},
    {date : ['18-20','nov. 2017'],place: ['MUSICALARUE ','Luxey  (40)']},
    {date : ['28-30','juin 2018'],place: ['REGGAE SUN SKA ','Bordeaux  (33)']},
    {date : ['17-19','mars 2016'],place: ['Francofolies','La Rochelle (17)']},
    {date : ['14-16','juill. 2016'],place: ['Main Square','Arras  (62)']},
    {date : ['20-22','sept. 2017'],place: ['Hellfest ','Clisson  (44)']},
    {date : ['21-23','mars 2018'],place: ['Francofolies','La Rochelle (17)']},
    {date : ['02-04','nov. 2016'],place: ['Eurockeennes','Belfort (90)']},
    {date : ['09-11','juill. 2016'],place: ['We love green','Paris (75)']},
    {date : ['19-21','mai 2017'],place: ['Vieilles Charrues','La Rochelle (17)']},
    {date : ['07-09','sept. 2018'],place: ['Gararock','Marmande (47)']},
    {date : ['26-28','avril 2016'],place: ['Musilac','Aix-les-bains (73)']}
];
var randomNbConcerts = Math.floor(Math.random() * 3),
    randomPositionConcertPrevious = 0;

for(var i = 0; i<=randomNbConcerts;i++){
    var newConcert = false;
    while(newConcert != true) {
        var randomPositionConcert = Math.floor(Math.random() * concerts.length);
        if(randomPositionConcert != randomPositionConcertPrevious){
            newConcert = true;
        }
    }
    var li_date = '<li class="date"><span>' + concerts[randomPositionConcert].date[0] + '</span>' + concerts[randomPositionConcert].date[1] + '</li>',
        li_place = '<li class="place">' + concerts[randomPositionConcert].place[0] + '<span>' + concerts[randomPositionConcert].place[1] + '</span></li>',
        li_more = '<li class="more"><a>En savoir plus</a></li>',
        li_concert = '<li><ul id="concertN' + i + '" class="Oneconcert">' + li_date + li_place + li_more + '</ul></li>';
    $('.listConcerts').append(li_concert);
    randomPositionConcertPrevious = randomPositionConcert;
}
// AJOUTS FILTRES
function $_GET(param) {
    var vars = {};
    window.location.href.replace( location.hash, '' ).replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function( m, key, value ) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );
    if(vars[param]){
        return vars[param];
    }else{
        return '';
    }
}
var mot1 =  $_GET('mot1');
var mot2 =  $_GET('mot2');
var mot3 =  $_GET('mot3');
var mots = [mot1,mot2,mot3];
if($_GET('categorie') != ''){
    $('.filters').append('<li class="icon-'+$_GET('categorie').toLowerCase()+'">'+$_GET('categorie')+'</li>');
}else{
    for(var j = 0;j<mots.length;j++){
        if(mots[j] != ''){
            $('.filters').append('<li>'+mots[j]+'</li>');
        }
    }
}