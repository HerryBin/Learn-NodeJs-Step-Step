/**
 * Created by xianrongbin on 2017/7/18.
 */
function log() {
    console.log.apply(this,arguments);
}

let urlInstance=require('url');

/** urlParse(url, parseQueryString, slashesDenoteHost)
 * 会将URL解析成一个对象
 * 第二个参数为 true，会将返回的对象 query 解析会对象 { }，否则是 字符串
 * 第三个参数为 true，会将host 解析出来，并且 path 与 pathName 中去除 host 值
 * */
let urlObject=urlInstance.parse('https://i.cnblogs.com/EditPosts.aspx?postid=7158165&update=1',true);
log(urlObject);

/** 将对象解析成 url */
log(urlInstance.format({
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.cnblogs.com',
    port: null,
    hostname: 'www.cnblogs.com',
    hash: null,
    search: null,
    query: null,
    pathname: '/xianrongbin/p/7158165.html',
    path: '/xianrongbin/p/7158165.html',
    href: 'http://www.cnblogs.com/xianrongbin/p/7158165.html' }));

log(urlInstance.resolve('http://example.com/', '/one'));

/**===============QueryString====================**/

/**
 * 总共四种方法 stringify(),parse(),escape(),unescape()
 * this module provides utilities for parsing and formatting URL query strings*/
const queryString=require('querystring');

/** foo=bar&baz=qux&baz=quux&corge= */
let urlStr=queryString.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });

/** 指定连接符 foo-bar%baz-qux */
let urlStr2=queryString.stringify({ foo: 'bar', baz: 'qux' }, '%', '-');
log(urlStr2);

/**QueryString.parse = QueryString.decode = function(qs, sep, eq, options)
 * 如果 query 的形式为 key1=val1&key2=val2,则不需要后面的参数；否则，需要指定的 sep(分隔符&），eq(=）
 * */
let heroUrl='www.hero.com/index.html?foo=bar&baz=qux&baz=quux&corge=test',
    urlObj=urlInstance.parse(heroUrl);
    queryObj=queryString.parse(urlObj.query);
log(queryObj);

log(queryString.escape('鲜荣彬'));
log(queryString.unescape('%E9%B2%9C%E8%8D%A3%E5%BD%AC'));


let urlStr1= queryString.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
console.log(urlStr1);
