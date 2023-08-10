/*
function plus(a,b){
    return (a +b);
}

var result = plus(10,20);

console.log(result);
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function checkAge(age){
    if(age > 19){
        return true;
    }
    else{
        return false;
    }
}

rl.question("나이를 입력해주세요 : ", function(age){

    if(checkAge(age)){
        console.log("성인입니다");
    }
    else{
        console.log("성인이 아닙니다");
    }
    rl.close();
});

//함수를 변수 안에 선언할시에 변수에다가 여러가지 함수를 바꾸면서 쓸수 있다.

function plus(a,b){
    return (a+b);
}

function minor(a,b){
    return (a-b);
}

var pp = plus(20,10);
console.log(pp);

var pp = minor(20,10);
console.log(pp);