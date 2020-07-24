const FULL = {
    user: "demo",
    passwd: "welcome",
    ashost: "10.68.110.51",
    sysnr: "00",
    client: "620",
    lang: "EN",
    //trace:"3",
};

module.exports = function (sid = "MME", trace = false) {
    if (sid == "full") return FULL;
    const as = { dest: sid };
    if (trace) as.trace = trace;
    return as;
};