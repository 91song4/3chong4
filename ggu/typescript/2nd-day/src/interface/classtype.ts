interface CraftBeer {
    beerName: string;
    nameBeer(beer: string): void;
    // test: string;
  }
  
  class myBeer implements CraftBeer {
    beerName: string = "Baby Guinness";
    nameBeer(b: string) {
      this.beerName = b;
    }
    constructor() {}
  }