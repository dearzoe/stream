var fs=require("fs");
function copy(file1,file2){
  var rs=fs.createReadStream(file1);
  var ws=fs.createWriteStream(file2);
    rs.on("data",function(data){
       var flag = ws.write(data);
        if(!flag){
            rs.pause();
        }
    });
    ws.on("drain",function(){
        rs.resume();
    });
    rs.on("end", function () {
        ws.end();//当读完之后也要关闭写入的文件
    })
}
copy("./xiao.jpg","./da.jpg");