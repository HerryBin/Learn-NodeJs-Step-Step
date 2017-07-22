/**
 * Created by xianrongbin on 2017/7/19.
 */
/**
 * 1、搜索自身DNS缓存
 * 2、搜索操作系统自身的DNS缓存（浏览器没有找到缓存或者缓存已经失效，谷歌浏览器可以输入
 *   chrome://net-internals/#dns 查看历史DNS缓存）
 * 3、读取本地 HOST文件
 * 4、浏览器发起一个DNS 的一个系统调用
 *    4.1 宽带运营商服务器查看本身缓存
 *    4.2 运营商服务器发起一个迭代DNS解析请求
 *    4.3 运营商服务器把结果返回操作系统内核同时缓存起来，操作系统内核把结果返回浏览器
 * 5、拿到DNS后对应的IP地址后，进行 HTTP 三次握手
 * 6、TCP/IP连接建立后，浏览器向服务器发送HTTP请求，包括请求头和请求体
 * 服务器向浏览器返回响应结果，包括响应头和响应体
 *  浏览器收到响应之后进行渲染
 *
 * */

let http = require('http'),
    url = 'http://www.imooc.com/learn/348',

    https = require('https'),
    urlHttps='https://www.taobao.com/';


/** 本地安装 cheerio  npm install cheerio*/
let cheerio = require('cheerio');

function filterChapters(html) {
    let $ = cheerio.load(html),
        chapters = $('.chapter ');

    chapters.each(function (item) {
        let chapter = $(this),
            chapterTitleDiv = chapter.find('strong');

        chapterTitleDiv.find('i').remove();
        chapterTitleDiv.find('div').remove();

        let chapterTitle = chapterTitleDiv.text().trim();
        console.log('【' + chapterTitle + ' 】');

        let videos = chapter.find('.video').children('li');

        videos.each(function (item) {
            let video = $(this).find('.J-media-item');
            video.find('i').remove();
            video.find('button').remove();
            let videoTitle = video.text().replace(/\s/g, '');

            let id = video.attr('href');

            console.log('     ' + id + '    ' + videoTitle);
        });
    });
}


http.get(url, function (res) {
    let html = '';
    res.on('data', function (data) {
        html += data;
    });

    res.on('end', function () {
        //console.log(html);
        filterChapters(html);
    });
});