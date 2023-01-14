function mysm3(){
    console.log(	Math.round(new Date().getTime()/1000) )
    //const sm3 = require('sm-crypto').sm3
    str="1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111";
    s="";
    for (let index = 0; index < 1024*10; index++) {
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
    let buf = textToArrayBuffer(s)
    console.log(buf.byteLength);
    console.log("sha256-原生毫秒="+Math.round(new Date().getTime()) )
    window.crypto.subtle.digest('SHA-256', buf);//https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
    console.log("sha256-原生毫秒="+Math.round(new Date().getTime()) )
    console.log(sm3Hash);
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