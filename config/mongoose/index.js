'use strict';
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://helpets:helpets123@ds161245.mlab.com:61245/helpets', function(err) {
    if (err) {
        console.log('connection failed' + err);
    } else {
        console.log('¡connection ok!');
    }
});
module.exports = mongoose;