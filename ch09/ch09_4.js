//프로미스
function pro1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('pro1 failed');
        },1000);
    });
}

function pro2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('pro2 success');
        },1000);
    });
}


pro1()
.then(function(result){
    console.log('result1', result);
    return pro2();
})
.catch(function(err){
    console.log('err',err);
    return Promise.reject();
})
.then(function(result){
    console.log('result2', result);
})
.catch(function(err){
    console.log('err',err);
})


console.log(`아이디와 비밀번호를 체크중입니다`);
