function warnUser(): void {
  console.log("This is my warning message");
  // return true;
}

warnUser();

// "strictNullChecks": true,  void : undefined
// "strictNullChecks": false, void : null | undefined
// 타입스크립트에선 null값이 들어가면 오류가 발생할 가능성이 있다고 한다(?)
// 무슨 이유인지는 모르지만 일단은 새겨듣고 null을 즐겨쓰지 말자.
const unusable: void = undefined;