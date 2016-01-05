/**
 * Created by rohran01 on 1/5/16.
 */

var random = require('./random');
var toUSD = require('./toUSD');

var textReturn = function() {
    return 'Account balance: \n';
};

var randomDollars = function() {
    return toUSD.dollars(random(1000000, 100));
};

exports.textReturn = textReturn;
exports.randomDollars = randomDollars;

