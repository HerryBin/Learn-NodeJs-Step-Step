/**
 * Created by xianrongbin on 2017/7/22.
 */
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();

function log() {

}


/**By default EventEmitters will print a warning if more than 10 listeners are added for a particular event.
 * nodeJs 对同一个事件，默认最多10个监听器(on),但是 console.log.apply(this, arguments);可以通过 setMaxListeners(count) 设置,被移的除监听器，也属于监听器的数量。
 * */

myEmitter.setMaxListeners(3);

/** 当监听器被注册后，一旦发出事件响应，所有的监听器都会被调用 */
let myEventCount=0;
myEmitter.on('myEvent', () => {
    myEventCount++;
    log(this);
    log('self an event occurred! ' + arguments[0]);
});

myEmitter.on('myEvent',()=>{
    myEventCount++;
});
let callback1=()=> console.log('我将会移除这个监听器');

myEmitter.on('myEvent',callback1);

/**
 * 移除监听器，需要使 监听器的回调函数保持一致
 */
myEmitter.removeListener('myEvent',callback1);


/** 触发myEvent事件,返回bool型，此事件是否监听 */
let isEmit=myEmitter.emit('myEvent', '我很开心','去吃饭');
log(isEmit);


log(`myEvent 的监听器数量是 ${myEmitter.listeners('myEvent').length} 个`); /** 不包括已移除的 listener */

let isSayEmit=myEmitter.emit('say','小孩子');
log(isSayEmit);

log(`myEvent 事件被监听了${myEventCount} 次`); //#S6模板字符串