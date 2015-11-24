(function () {
    
    'use strict';
    
    var ctlr   = require('./../controllers/');
            
    module.exports = function (app) {

        app.get('/', ctlr.home.get);

    };

})();


