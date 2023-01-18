interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue): void {
  console.log(labeledObj.label);
  console.log(labeledObj);
}

let myObj = { size: 11, label: "Size 11 Object" };
printLabel(myObj);
