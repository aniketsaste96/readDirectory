const fs = require("fs");

//get the arguments passed to the index.js process when run in the command line.
const [, , path] = process.argv;

//withFileTypes return with file type
fs.readdir(path, { withFileTypes: true }, (error, dir) => {

    //error handling if any
    if (error) {
        console.log(error)
    } else {
        console.log(`Files in Directory of ${path} is:`);
        //loop through dir to get files available
        dir.forEach((files) => {
            console.log(files)
        })
    }

})


//OUTPUT
//Command in console node index.js <dirname>

// Files in Directory of backup is:
// Dirent { name: 'files.html', [Symbol(type)]: 1 }
// Dirent { name: 'files2.txt', [Symbol(type)]: 1 }
// Dirent { name: 'files3.js', [Symbol(type)]: 1 }
