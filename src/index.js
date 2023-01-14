function mysm3(){
    console.log(	Math.round(new Date().getTime()/1000) )
    //const sm3 = require('sm-crypto').sm3
    str="1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";
    s="";
    for (let index = 0; index < 1024*1; index++) {
        s=s+str;
    }
    //sm_crypto的SM3实现
    //https://github.com/JuneAndGreen/sm-crypto
    var time_sc0=Math.round(new Date().getTime());
    //console.log("zero="+time0) 
    let hashData = sm3(s) // 杂凑
    var time_sc1=Math.round(new Date().getTime());
    var time_sm_crypto=time_sc1-time_sc0;
    
    //sm3-js的SM3实现
    //https://gitee.com/beginnern/sm3-js
    var bytes = new TextEncoder().encode(s);
    var time_sj0=Math.round(new Date().getTime())
    var sm3Hash = sm3Sum(bytes)
    var time_sj1=Math.round(new Date().getTime());
    var time_sm3js=time_sj1-time_sj0;

    //MD5库
    //http://pajhome.org.uk/crypt/md5 
    var time_md5_0=Math.round(new Date().getTime());
    str_md5(s)
    var time_md5_1=Math.round(new Date().getTime());
    var time_md5_sum=time_md5_1-time_md5_0;


    //crypto-js的SHA256
    //https://github.com/brix/crypto-js
    var time_cj0=new Date().getTime()
    CryptoJS.SHA256(s).toString()
    var time_cj1=new Date().getTime()
    var time_sha256_CryptoJS=time_cj1-time_cj0;

    //https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    //浏览器接口
    console.log("sha256="+Math.round(new Date().getTime()) )
    let buf = textToArrayBuffer(s)
    console.log(buf.byteLength);
    var llq0=Math.round(new Date().getTime());
    window.crypto.subtle.digest('SHA-256', buf);
    var llq1=Math.round(new Date().getTime());
    var time_sha_llq=llq1-llq0;
    console.log(sm3Hash);

    //统计结果
    console.log("How much time do I need to calculate the hash of 1MB of data:");
    console.log("")
    console.log("sm_crypto="+time_sm_crypto+" ms");
    console.log("sm3-js="+time_sm3js+" ms");
    console.log("md5-js="+time_md5_sum+" ms");
    console.log("crypto-js_SHA256="+time_sha256_CryptoJS+" ms");
    console.log("Browser_SHA256="+time_sha_llq+" ms");
}
function textToArrayBuffer(s) {
    var i = s.length;
    var n = 0;
    var ba = new Array()
    for (var j = 0; j < i;) {
      var c = s.codePointAt(j);
      if (c < 128) {
        ba[n++] = c;
        j++;
      }
      else if ((c > 127) && (c < 2048)) {
        ba[n++] = (c >> 6) | 192;
        ba[n++] = (c & 63) | 128;
        j++;
      }
      else if ((c > 2047) && (c < 65536)) {
        ba[n++] = (c >> 12) | 224;
        ba[n++] = ((c >> 6) & 63) | 128;
        ba[n++] = (c & 63) | 128;
        j++;
      }
      else {
        ba[n++] = (c >> 18) | 240;
        ba[n++] = ((c >> 12) & 63) | 128;
        ba[n++] = ((c >> 6) & 63) | 128;
        ba[n++] = (c & 63) | 128;
        j+=2;
      }
    }
    return new Uint8Array(ba).buffer;
  }