
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var min = Number.MAX_VALUE;
var max = Number.MIN_VALUE;

var a = function(){
    rl.question("숫자를 입력하세요 : ", function(num){
        if (num == -1){
            console.log("MIN : " + min);
            console.log("MAX : " + max);
            rl.close();
        }
        else{
            if(max < +num){
                max = +num;
            }
            if(min > +num){
                min = +num;
            }
            a();
        }
    });
};
