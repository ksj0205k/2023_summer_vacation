
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = [];
var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;

var a = function() {
    rl.question("숫자를 입력하세요 : ", function(num){
        if (num == -1){
            for (var i = 0 ; i < arr.length ; i++){
                if(max < arr[i]){
                    max = arr[i];
                }
                if(min > arr[i]){
                    min = arr[i];
                }
            }
            console.log("MAX : " + max);
            console.log("MIN : " + min);
            rl.close();
        }
        else{
            arr.push(parseInt(num));
            a();
        }
    });
}

a();