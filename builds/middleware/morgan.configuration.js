!function (e, r) {
    "use strict";
    var u = function (e, u) {
        var n = r("morgan");
        return e.use(n("combined")), e.use(u.HaltOnTimeout), n
    };
    e.exports = u
}(module, require);