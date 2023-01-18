function printId(id: number | string):void {
  // console.log(id.toUpperCase());

  // type narrowing
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  }
}