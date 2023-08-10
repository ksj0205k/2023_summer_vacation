//반복문

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("? : ",function(num){
    for(let i = 1 ; i <= 9 ; i++){
        console.log(num + ' * ' + i + ' = ' + (num * i));
    }
    rl.close();
});