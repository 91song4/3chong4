import test from "node:test";

interface CraftBeer {
    name: string;
    hop?: number;
    test?: string;
  }
  
  let myBeer = {
    name: "Saporo",
    hop: 34,
    // test: "test"
  };
  
  function brewBeer(beer: CraftBeer) {
    console.log(beer.name); // Saporo
    console.log(beer.hop); // 34
  }
  
  brewBeer(myBeer);