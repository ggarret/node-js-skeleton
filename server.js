(function () {

    'use_strict';
    
    var express     = require('express');
    var config      = require('./config/config');
    var middlewares = require('./middlewares');
    var routes      = require('./config/routes');
    var path        = require('path');  


    module.exports.start = function (done) {

        var app = express();

        app.use(express.static(__dirname + '/public'));

        middlewares.global(app);

        routes(app);

        var server = app.listen(config.api.port, function () {
            console.log(("Listening on port " + config.api.port));
            if (done) {
                return done(null, app, server);
            }
        }).on('error', function (e) {
            if (e.code == 'EADDRINUSE') {
                console.log('Address in use. Is the server already running?');
            }
            if (done) {
                return done(e);
            }
        });
    }

    if (path.basename(process.argv[1], '.js') == path.basename(__filename, '.js')) {
        module.exports.start()
    }

})();
