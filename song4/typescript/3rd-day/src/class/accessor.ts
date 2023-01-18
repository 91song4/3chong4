import { stringify } from "querystring";

class Developer {
  public name: string;
  private name2: string; 
  protected name3: string;

  public get Name(): string{
    return this.name2;
  }

  private set Name(name:string){
    this.name2 = name; 
  }

  constructor(name:string) {
    this.name = name;
    this.Name = name;
  }
}

const josh = new Developer('song');
console.log('name: ',josh.name);
console.log('Name: ',josh.Name);
josh.name = "Josh Bolton";
// josh.name2 = "Josh Bolton2";
console.log('name: ',josh.name);
console.log('Name: ',josh.Name);

export { Developer };
