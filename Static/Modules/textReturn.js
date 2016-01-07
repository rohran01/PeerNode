/**
 * Created by rohran01 on 1/5/16.
 */

var random = require('./random');
var toUSD = require('./toUSD');

var textReturn = function() {
    return 'Yearly Salary: \n';
};

var randomDollars = function() {
    return toUSD.dollars(random(50000000, 300000));
};

exports.textReturn = textReturn;
exports.randomDollars = randomDollars;

