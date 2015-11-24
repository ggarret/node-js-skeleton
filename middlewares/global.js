(function () {

    'use strict';

    var bodyParser      = require('body-parser');
    var toobusy         = require('toobusy-js');

    module.exports = function (app) {


        app.use(function (req, res, next) {
            if (toobusy()) {
                console.log('too busy!');
                //TODO Middleware error
                res.send(503, "server_too_busy");
            } else {
                next();
            }
        });

        app.use(bodyParser.json());

        app.use(bodyParser.urlencoded({extended: true}));

    }
})();
