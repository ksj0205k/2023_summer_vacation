const color = ['red', 'green', 'blue'];
let[r, g, b] = color;

console.log(r);
console.log(g);
console.log(b);


[r, g, b] = [b, r, g];

console.log(r);
console.log(g);
console.log(b);

//만약 3개를 다 채우지 않을경우 하나는 undifined 형태로 남는다
// 기본값 지정가능
// 점세계로 배열로 남는 모든 것들 입력 가능 ex [ a, b, ...rest]  >> rest[0] rest[1]
// 배열끼리 결합도 가능

const arr1 = ['red','yellow'];
const arr2 = ['blue','green'];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

//객체도 분해하여 입력가능

let dic = {
    boy : "소년",
    girl: "소녀",
    friend : "친구"
};

let[bo, gi, fr] = dic;  // ??

console.log(bo);
console.log(gi);