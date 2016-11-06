var fs = require("fs");
var rs = fs.createReadStream("./1.txt",{
    encoding:'utf8',
    highWaterMark:5
});
rs.on("data", function (data) {
    console.log(data);
    /*************************************/
    rs.pause();//暂定触发data事件
    /*************************************/
    setTimeout(function () {
        rs.resume()
    },5000);
});
rs.on("end", function () {
    console.log("读完了")
});
rs.on("error", function (err) {
    console.log("出错了",err)
});