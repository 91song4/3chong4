let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

let someValue1: any = "this is a string";

let strLength1: number = (someValue as string).length;