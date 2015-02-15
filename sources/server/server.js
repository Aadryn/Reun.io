(function (module, require) {
    'use strict';

    var express = require('express');

    var application = new express();

    application.use(express.static(__dirname + '/public'));

    var timeoutConfiguration = require('./middleware/connect-timeout.configuration')(application);
    var compressionConfiguration = require('./middleware/compression.configuration')(application, timeoutConfiguration);
    var cookieParserConfiguration = require('./middleware/cookie-parser.configuration')(application, timeoutConfiguration);
    var morganConfiguration = require('./middleware/morgan.configuration')(application, timeoutConfiguration);
    var session = require('./middleware/session.configuration')(application, timeoutConfiguration);
    var bodyParser = require('./middleware/body-parser.configuration')(application, timeoutConfiguration);

    var password = require('./middleware/passport/passport.configuration')(application, timeoutConfiguration);

    require('./bootstrap/route/default/default')(application, password);

    application.listen(3000);

})(module, require);
