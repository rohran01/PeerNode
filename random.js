/**
 * Created by rohran01 on 1/5/16.
 */
var randomNumber = function(max, min) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

module.exports = randomNumber;