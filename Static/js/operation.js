/**
 * Created by rohran01 on 1/5/16.
 */
//var ching = $('audio')[0]; //for some reason, this isn't working


$(document).ready(function() {
    click();
})

function generate() {

    $.ajax({
        type: 'GET',
        url: '/answer',
        success: function (response) {
            $('.salary-holder').html('<p>' + response + '</p>');
        }
    });

    var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=money';
    $.ajax(url).then(function (response) {
        var display = (response.data.fixed_height_downsampled_url);
        console.log(display);
        $('.money-gif').html('<img src=' + display + ' />');
    });

}

function click() {
    $('.generator').on('click', function() {
        generate();
        ching();
        //console.log(ching);
        //ching.play(); //i can't get this audio to play for some reason....
    });
}

//function ching() {
//    $.ajax('/ching').then(function (response) {
//        console.log(response);
//        response.play();
//    })
//}