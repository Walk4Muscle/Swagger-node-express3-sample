var fs = require('fs');
exports.get = function (req, res) {
    //res.send(200, "hello world");
    fs.createReadStream('123.txt').pipe(res);
};