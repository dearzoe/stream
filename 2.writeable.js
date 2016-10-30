var fs = require("fs");
var ws = fs.createWriteStream("2.txt",{
   flags:"w",
   start:1
});
var i=0;
var max = 100000;
function write(){
   console.log("继续写"+i);
   var flag=true;
   while(flag && i<max){
      flag=ws.write(String(i++))
   }
}
write();
ws.on("drain", function () {
   console.log("写满了"+i);
   write()
});

