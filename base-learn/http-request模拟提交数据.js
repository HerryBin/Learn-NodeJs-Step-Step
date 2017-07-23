/**
 * Created by xianrongbin on 2017/7/22.
 */

let http = require('http'),
    queryString = require('querystring'),
    postData = queryString.stringify({
        'content': '如果是https,则可以 require(\'https\')创建，支持下',
        'mid': 8837
    }),
    options = {
        hostname: 'www.imooc.com',
        port: 80,
        path: '/course/docomment',
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.8',
            'Connection': 'keep-alive',
            'Content-Length': postData.length,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Cookie': 'imooc_uuid=23d55b8d-b70f-4c58-8d61-92fb174d0541; imooc_isnew_ct=1488093131; UM_distinctid=15bddf065f41d-01507549719b2d-4d015463-100200-15bddf065f911c; CNZZDATA1261110065=1865436468-1494075592-null%7C1496475928; loginstate=1; apsid=UwYTEwOGFhYTZjYzBlM2RjZDliZWI0NjA4YTYxMjUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTM4NjgwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4aWFucm9uZ2JpbkAxMjYuY29tAAAAAAAAAAAAAAAAADZiZjE4YzIwNjJhMDU4OWFhYmY1YzIyZjU2Y2IwYWM3fIhXWXyIV1k%3DY2;' +
            'last_login_username=xianrongbin%40126.com; PHPSESSID=i384geav58joe49n02jm564te2; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1498959219,1499950719,1500210705,1500555646;' +
            'Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1500731644; imooc_isnew=2; cvde=5970a97771cbd-45',
            'DNT': '1',
            'Host': 'www.imooc.com',
            'Origin': 'http://www.imooc.com',
            'Referer': 'http://www.imooc.com/video/8837',
            'User-Agent': 'User-Agent:Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.221 Safari/537.36 SE 2.X MetaSr 1.0',
            'X-Requested-With': 'XMLHttpRequest'
        }
    },
    req = http.request(options, (res) => {
        console.log('Status ' + res.statusCode);
        console.log('headers: ' + JSON.stringify(res.headers));
        res.on('data', (chunk) => {
            console.log(Buffer.isBuffer(chunk));
            console.log(typeof  chunk);
        });

        res.on('end', () => {
            console.log('ok');
        });
    });

    req.on('error', (e) => {
        console.log('error-----' + e.message);
    });

    req.write(postData);
    req.end();