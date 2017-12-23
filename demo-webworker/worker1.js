// worker1.js

console.log('hello, I,m worker 1');

importScripts('worker2.js', 'worker3.js');

console.log('kkk');

console.log(Worker);
