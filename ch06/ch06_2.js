var arr = ['자바스크립트', 'C언어', '파이썬'];

console.log("====초기 배열====");
for(var i = 0; i < 3 ; i++){
    console.log(arr[i]);
}
console.log("배열 길이 : " + arr.length);
console.log("====추가 배열====");

arr.push('ASP.net');
arr.push('C#.net');

for(var i = 0; i < 5 ; i++){
    console.log(arr[i]);
}

console.log("배열 길이 : " + arr.length);