!function (e, r) {
    "use strict";
    var t = function (e, t) {
        var u = r("compression"), o = {threshold: 512};
        return e.use(u(o)), e.use(t.HaltOnTimeout), u
    };
    e.exports = t
}(module, require);