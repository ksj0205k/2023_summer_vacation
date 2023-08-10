const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('점수를 입력하세요. : ', function(score){
    score = parseInt(score);
    if(score >= 60 && score <= 100){
        if(score >= 90){
            console.log("장학대상입니다");
        }
        console.log("합격입니다");
    }
    else if(score < 60 && score >= 0){
        console.log("불합격입니다");
    }
    else{
        console.log("잘못된 값을 입력하셨습니다.");
    }
    rl.close();
});