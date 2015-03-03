(function (module, require) {
    'use strict';

    var Express = require('express');
    var path = require('path');

    var application = new Express();

    application.use(Express.static(path.join(__dirname, 'public')));

    var timeoutConfiguration = require('./middleware/connect-timeout.configuration')(application);
    require('./middleware/compression.configuration')(application, timeoutConfiguration);
    require('./middleware/cookie-parser.configuration')(application, timeoutConfiguration);
    require('./middleware/morgan.configuration')(application, timeoutConfiguration);
    require('./middleware/session.configuration')(application, timeoutConfiguration);
    require('./middleware/body-parser.configuration')(application, timeoutConfiguration);

    var password = require('./middleware/passport/passport.configuration')(application, timeoutConfiguration);

    require('./bootstrap/route/default/default')(application, password);

    application.listen(3000);

}(module, require));
