!function (e) {
    "use strict";
    var t = function (e, t, i) {
        req.isAuthenticated() ? i() : t.send(401)
    }, i = {IsAuthenticated: t};
    e.exports = i
}(module, require);