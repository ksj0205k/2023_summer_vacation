const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('점수를 입력하세요 :',function(score){
    if(score >= 91 && score <= 100){
        console.log("A");
    }
    else if(score >= 81 && score <= 90 ){
        console.log("B");
    }
    else if(score >= 71 && score <= 80 ){
        console.log("C");
    }
    else if(score >= 61 && score <= 70 ){
        console.log("D");
    }
    else if(score >= 0 && score <= 60 ){
        console.log("F");
    }
    else{
        console.log("잘못된 값을 입력하셨습니다");
    }
});