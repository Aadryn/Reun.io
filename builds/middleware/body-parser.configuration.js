!function (e, u) {
    "use strict";
    var r = function (e, r) {
        var t = u("body-parser"), n = {extended: !1};
        return e.use(t.urlencoded(n)), e.use(r.HaltOnTimeout), e.use(t.json()), e.use(r.HaltOnTimeout), t
    };
    e.exports = r
}(module, require);