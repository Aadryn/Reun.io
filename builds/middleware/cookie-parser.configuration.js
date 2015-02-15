!function (e, r) {
    "use strict";
    var u = function (e, u) {
        var t = r("cookie-parser");
        return e.use(t()), e.use(u.HaltOnTimeout), t
    };
    e.exports = u
}(module, require);