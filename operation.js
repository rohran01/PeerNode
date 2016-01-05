/**
 * Created by rohran01 on 1/5/16.
 */
$(document).ready(function() {
    click();
})

function generate() {
    $.ajax({
        type: 'GET',
        url: './app.js',
        success: function (response) {
            console.log(response);
        }
    });
}

function click() {
    $('.generator').on('click', generate());
}