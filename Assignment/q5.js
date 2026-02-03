console.log('Start');

process.nextTick(() => {
  console.log('process.nextTick');
});

Promise.resolve().then(() => {
  console.log('Promise callback');
});

setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmdiate');
});

console.log('End');