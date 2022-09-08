// global object
//console.log(global);

/*
global.setTimeout(() => {
    console.log('in the time out');
}, 3000);
*/

/*
setTimeout(() => {
    console.log('in the time out');
    clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
    console.log('in the interval');
}, 1000);
*/

//console.log(__dirname);
//console.log(__filename);

// methods that belong to window object are not working with node

//console.log(document.querySelector); // document is not defined