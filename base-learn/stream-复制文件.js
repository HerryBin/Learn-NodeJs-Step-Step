/**
 * Created by xianrongbin on 2017/7/24.
 */
/**
 * 1、流（stream）是处理流数据的抽象接口，所有的流都是 EventEmitter 的实例
 *
 * */

  function log(){
     console.log.apply(this,arguments);
  }

  const fs=require('fs');
  /**
    原始的拷贝方式，文件太大，占用内存
    source=fs.readFileSync('../base-learn/Buffer.js');
    fs.writeFileSync('testCopy.js',source);
   */

    let readStream=fs.createReadStream('../base-learn/Buffer.js'),
        writeStream=fs.createWriteStream('Buffer-1.js');

    readStream.on('data',(chunk)=>{
        if(!writeStream.write(chunk)){
            log('在缓存中，写入速度太慢');
            readStream.pause();
        }
    });

    readStream.on('end',()=>{
       writeStream.end();
    });

    writeStream.on('drain',()=>{
       log('data drains');
       readStream.resume();
    });

    /** 字节流的方式读取文件 */
    let readStreamT=fs.createReadStream('../base-learn/Buffer.js');
    readStreamT.on('data',(chunk)=>{
      log('data emits');
      log(chunk.toString('utf8'));

      log('获取流数据暂停');
      readStream.pause();
      setTimeout(()=>{
         readStream.resume();
      },10);

    }).on('readable',()=>{
      //log('data readable');
    }).on('end',()=>{
      //log('data ends');
    }).on('close',()=>{
      //log('data close');
    }).on('error',(e)=>{
      //log('data read error '+e);
    });