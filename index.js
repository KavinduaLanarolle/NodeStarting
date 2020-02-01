const express = require('express');
const bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(bodyparser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.listen(8080 ,()=>console.log("Express Server Sratrted"));

  app.get('/nic',(req,res)=>{

    //sample NIC 651891060V
    var nic = req.query.nic;
    var no=req.query.no;

    var mobile=no.length;
    var nicType,newNIC;
    var length = nic.length;
    var V = nic.substring(9);
    var plus=no.substring(0);
    var onlyNO=no.substring(1,12);




    V = V.toLowerCase();


    if (length == 10 && V=='v'){
        nicType = "old";
    }else if(length == 13 && Number.isInteger(parseInt(nic))){
        nicType = "new";
    }else{
        nicType = "invalid";
    }if(mobile == 12  && Number.isInteger(parseInt(onlyNO))){
      var phoneNo=no;
    }else{
      phoneNo="ERR";
    }

    
    var respone = {nic,phoneNo}
    app.listen(8080 ,()=>console.log(phoneNo));
    res.send(respone)
  })
