interface CraftBeer {
  beerName: string;
  nameBeer(beer: string): void;
}

class myBeer implements CraftBeer {
  beerName: string = "Baby Guinness";

  nameBeer(b: string): void {
    this.beerName = b;
  }

  constructor(beeeeer: string) {
    this.nameBeer(beeeeer);
  }
}

const myBeer2 = new myBeer("cass");
console.log(myBeer2);
console.log(myBeer2.nameBeer);
