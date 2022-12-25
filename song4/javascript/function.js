function isAdult(person)
{
    // 왜 이런 코드가 가능한지 모르겠다면 비교 연산자를 복습하세요! 기초 튼튼!
    return person.age >= 19;
}

function orderBeer(person)
{
    return isAdult(person)?`맥주 나왔습니다! ${person.name}님`:`나이 더 먹고 오세요! ${person.name}님`;
}

const persons = [
    { name: "이용우", age: 19 },
    { name: "김예지", age: 18 },
];

// for...of문이 어떻게 동작하는지 모르겠다면 반복문을 복습하세요!
for (const person of persons)
{
    console.log(orderBeer(person));
}

const example = ['apple', 'banana', 'mango', 'kiwi', 'melon'];
example.forEach(ex => console.log(ex));
// Print: 맥주 나왔습니다! 이용우님
// 나이 더 먹고 오세요! 김예지님