function mysm3(){
    console.log(	Math.round(new Date().getTime()/1000) )
    //const sm3 = require('sm-crypto').sm3
    str="1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";
    s="";
    for (let index = 0; index < 1024*1; index++) {
        s=s+str;
    }
    var time0=Math.round(new Date().getTime()/1000);
    console.log("zero="+Math.round(new Date().getTime()/1000) )
    //let hashData = sm3(s) // 杂凑
    var bytes = new TextEncoder().encode(s);
    var sm3Hash = sm3Sum(bytes)
    var time2=Math.round(new Date().getTime()/1000);
    console.log("sm3="+Math.round(new Date().getTime()/1000) )
    str_md5(s)
    console.log("md5="+Math.round(new Date().getTime()/1000) )
    CryptoJS.SHA256(s).toString()
    console.log("sha256="+Math.round(new Date().getTime()/1000) )
     console.log(sm3Hash);

}
