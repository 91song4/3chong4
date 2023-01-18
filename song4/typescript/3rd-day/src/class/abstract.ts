abstract class Developer {
  abstract coding(): void; // 'abstract'가 붙으면 상속 받은 클래스에서 무조건 구현해야 함
  drink(): void {
    console.log("drink sth");
  }
}

class FrontEndDeveloper extends Developer {
  coding(): void {
    // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log("develop front");
  }
  design(): void {
    console.log("design front");
  }
}

class BackEndDeveloper extends Developer {
  coding(): void {
    // Developer 클래스를 상속 받은 클래스에서 무조건 정의해야 하는 메서드
    console.log("develop server");
  }
  design(): void {
    console.log("design server");
  }
}

// const dev = new Developer(); // error: cannot create an instance of an abstract class
const josh = new BackEndDeveloper();
const kai = new FrontEndDeveloper();

josh.coding(); // develop server
josh.drink(); // drink sth
josh.design(); // design server

console.log("");

kai.coding(); // develop front
kai.drink(); // drink sth
kai.design(); // design front

export { Developer };
