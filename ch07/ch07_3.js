const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var arr = [0, 0, 0, 0, 0];

var a = function(){
    rl.question('? :' , function(score){
        if(score == -1){
            console.log("A :" + arr[0]);
            console.log("B :" + arr[1]);
            console.log("C :" + arr[2]);
            console.log("D :" + arr[3]);
            console.log("F :" + arr[4]);
            rl.close();
        }
        else{
            if(score >= 90 && score <= 100){
                arr[0]++;
            }
            else if(score >= 80 && score <= 89){
                arr[1]++;
            }
            else if(score >= 70 && score <= 79){
                arr[2]++;
            }
            else if(score >= 60 && score <= 69){
                arr[3]++;
            }
            else if(score >= 0 && score <= 59){
                arr[4]++;
            }
            else{
                console.log("잘못입력하셨습니다.");
            }

            a();
        }
    });
}

a();