var fs= require("fs");
var rs = fs.createReadStream("./1.txt",{
    flags:'r',//打开文件之后想做什么
    encoding:null,//编码默认为null,得到是buffer对象
});

/*
* 可以在创建流之后指定编码
* */
rs.setEncoding('utf8');
//开始读取文件“data”事件
rs.on('data', function (data) {
    console.log(data)
});
//读取文件完成时“end”事件
rs.on('end', function () {
    console.log("读完了")
});
//读取文件出错时“error”事件
rs.on('error', function (err) {
    console.log("出错了",err)
});