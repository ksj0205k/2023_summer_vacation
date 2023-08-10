/* 함수의 구성
function 함수이름 (전달할 내용){ 함수 내용 }


function showMessege() {

    console.log("korea is no.1");
}

showMessege();

*/

var userName = '김성재'; // 전역변수
var userPW = '1111';

function account(userId , userpw){
    console.log(userId);
    console.log(userpw);

    if(userId == userName){
        if(userPW == userpw){
            console.log("반갑습니다 " + userId + '님');
        }
    }
}

account(userName,userPW);