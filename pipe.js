var fs= require("fs");
var rs=fs.createReadStream("./xiao.jpg");
var ws=fs.createWriteStream("./haha.jpeg");
rs.pipe(ws);