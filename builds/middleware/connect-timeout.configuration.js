!function (t, e) {
    "use strict";
    var u = function (t) {
        var u = e("connect-timeout"), n = "5s";
        t.use(u(n));
        var o = function (t, e, u) {
            t.timedout || u()
        };
        return {Timeout: u, HaltOnTimeout: o}
    };
    t.exports = u
}(module, require);