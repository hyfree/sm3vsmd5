# Overview 概述

Compare the performance of md5, sha256 and sm3 in a browser environment

在浏览器环境下比较md5、sha256和sm3的性能

# How to use 如何使用

After downloading the js dependency,Open index.html in your browser

安装js依赖后，使用浏览器打开index.html

```shell
pnpm install
```
# How to contribute code  如何贡献代码


If you find an error in my code or if you wish to submit another js-lib, you can submit your code

如果你发现我的代码中存在错误或者你希望提交其他js-lib，可以提交你的代码



# Test Results 测试结果

```js
How much time do I need to calculate the hash of 1MB of data:
index.js:53 
index.js:54 sm_crypto(sm3)=14783 ms
index.js:55 sm3-js=1962 ms
index.js:56 md5-js=670 ms
index.js:57 crypto-js_SHA256=823 ms
index.js:58 Browser_SHA256=1 ms
```

![image](https://user-images.githubusercontent.com/26597853/215422628-a408f72d-59aa-42c1-b034-ef2f4251b779.png)
