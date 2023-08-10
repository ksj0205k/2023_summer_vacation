const name = '이창원';
const age = 22;
const ki = 171.5;

console.log(`이름 ${name}, 나이 ${age}`);
// 자바스크립트에서는 ``와 같은 백틱으로 사용하는 것이 편하다

var a = new Object();

a.name = '가나다';
a.age = 55;
a['new'] = 1;   //동척처리 가능한 기능

delete(a.age);

console.log(a);

var b = {
    name: `가나다`,
    age: 10,
    attack: (weapon) => {                   //function을 쓰지 않고 () => {}로 함수 선언 가능 (추천기능)
        return (`${weapon}으로 때렸습니다`)
    }
};

console.log(b.attack(`돌`));


