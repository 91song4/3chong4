//파라미터에 직접 타입을 지정해주면 코드가 너무 길어지게 된다.
function printLabel(labeledObj: { label: string; test?: number, blah?:string, blah2?:any }): void {
  console.log(labeledObj);
  console.log(labeledObj.label);
  console.log(labeledObj.test);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);