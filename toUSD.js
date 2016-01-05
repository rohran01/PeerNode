/**
 * Created by rohran01 on 1/5/16.
 */

var toUSD = function(number) {
    var number = (number / 100).toString(),
        dollars = number.split('.')[0],
        cents = (number.split('.')[1] || '') + '00';
    dollars = dollars.split('').reverse().join('').replace(/(\d{3}(?!$))/g, '$1,').split('').reverse().join('');
    return '$' + dollars + '.' + cents.slice(0, 2);
};


exports.dollars = toUSD;