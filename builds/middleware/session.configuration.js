!function (e, u) {
    "use strict";
    var r = function (e, r) {
        var t = u("express-session"), a = {
            secret: "qavuDUxE2w*k3T*=_#g?fR$62ABrUfenmethed!ufa-re8hEfr!t+ututrustukebE#uQUWAD3uy7sw6TH?vaxecuZe6HuPhT8AThUPr?--d5prEvahEZExa33pa68?epe5R2m=thurA+aPru7H3PathetHEDaz#RUqe5UZ-B&k74heDrucr4ThAj?jUHUNu",
            resave: !1,
            saveUninitialized: !0
        };
        return e.use(t(a)), e.use(r.HaltOnTimeout), t
    };
    e.exports = r
}(module, require);