const fs = require('fs');

// read files

/*
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err) {
        console.log(err);
    }

    // console.log(data);
    // <Buffer 48 65 6c 6c 6f 2c 20 6e 69 6e 6a 61 73 21>

    //console.log(data.toString());
    // Hello, ninjas!
});
*/

// console.log('last line');
// last line
// Hello, ninjas!


// write file

/*
fs.writeFile('./docs/blog1.txt', 'Hello, world!', () => {
    console.log('blog1 file was written');
});

fs.writeFile('./docs/blog2.txt', 'Hello, again!', () => {
    console.log('blog2 file was written')
});

*/
// blog1 file was written
// blog2 file was written


// directories
/*
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
    
        console.log('directory created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('directory removed');
    });
}
*/

// deleting files

if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }

        console.log('file deleted');
    });
}
