/**
 * Created by xianrongbin on 2017/7/17.
 */
/**
 * 1、回调函数
 *    异步编程时，将后续逻辑封装成起始函数的参数，逐层嵌套
 *
 * 2、同步/异步
 *
 * 3、单线程/多线程
 *
 * 4、阻塞/非阻塞
 *
 * 5、事件驱动
 *    触发动作引起的操作
 *
 * 6、基于事件驱动的回调
 *    为某个事件注册了回调函数，但是这个函数不是马上执行； 只有当事件触发后，才调用回调函数
 *
 * 7、Event loop
 *    管理大量异步操作的机制叫做 事件循环
 *
 *   Node.js 核心思想： 非阻塞、单线程 、 事件驱动
 * */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8;');
    res.end('<h1>这是nodeJs 创建的web服务器。</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});