const readline = require('readline');
const fs = require('fs');


function main() {
    var writeData = '';
    fs.readdir('./files', (error, files) => {
        if(files.length <= 0) {
            console.log('No text files!');
            return;
        }

        files.forEach(file => {
            fs.readFile(`./files/${file}`, (error, data) => {
                if(error) {
                    console.log(error);
                    return;
                }

                writeData += `${data.toString()}\n`
            })
        })

        fs.writeFile('./output.txt', writeData, (error) => {
            if(error) {
                console.log('Could not write file!');
                return;
            }

            console.log('Text files combined!');
        })
    })
}

main()
