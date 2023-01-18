interface CraftBeer {
  name: string;
  hop?: number;
}

let myBeer = {
  name: "Saporo",
  review: "haha",
};

function brewBeer(beer: CraftBeer): void {
  console.log(beer);
  console.log(beer.name);
  console.log(beer.hop);
}

brewBeer(myBeer);
