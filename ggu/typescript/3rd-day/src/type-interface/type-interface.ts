interface AnimalInterface {
    species: string;
    height: number;
    weight: number;
  }
  
  const tiger: AnimalInterface = {
    species: "tiger",
    height: 200,
    weight: 300,
  };
  
  type AnimalType = {
    species: string;
    height: number;
    weight: number;
  };
  
  const lion: AnimalType = {
    species: "lion",
    height: 180,
    weight: 400,
  };