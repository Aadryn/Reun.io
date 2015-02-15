!function (e, i) {
    "use strict";
    var r = i("express"), o = new r;
    o.use(r["static"](__dirname + "/public"));
    var a = i("./middleware/connect-timeout.configuration")(o), n = (i("./middleware/compression.configuration")(o, a), i("./middleware/cookie-parser.configuration")(o, a), i("./middleware/morgan.configuration")(o, a), i("./middleware/session.configuration")(o, a), i("./middleware/body-parser.configuration")(o, a), i("./middleware/passport/passport.configuration")(o, a));
    i("./bootstrap/route/default/default")(o, n), o.listen(3e3)
}(module, require);