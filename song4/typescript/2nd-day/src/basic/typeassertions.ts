let someValue: any = 'this is a string';
// let strLength: number = (someValue).length;
let strLength: number = (<string>someValue).length;

let someValue2: any = 'this is a string';
let strlength2: number = (someValue as string).length;

let test: any = 4;
let test2: any;
test2=<string>test
console.log(typeof test2);
//형변환은 아닌듯 하다..