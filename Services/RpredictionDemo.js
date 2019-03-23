var R = require("r-script");

var attitude = JSON.parse(
    require("fs").readFileSync("example/attitude.json", "utf8"));

R("example/ex-async.R")
    .data({ df: attitude, nGroups: 3, fxn: "mean" })
    .call(function(err, d) {
        if (err) throw err;
        console.log(d);
    });