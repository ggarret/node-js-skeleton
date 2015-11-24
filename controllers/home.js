(function () {

    'use strict';

    module.exports = {

        get: function (req, res, next) {
            req.status(200).json('hello world!')
        }

    };

})();