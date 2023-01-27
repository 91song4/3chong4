## 노드 심화 강의

<br>

### TypeScript 환경설정

<br>

- 패키지 설치

```bash
npm install typescript @types/node ts-node nodemon -D
```

<br>

1.  tsconfig.json 설정

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "lib": ["DOM"],
    "outDir": "build",
    "rootDir": "src",
    "strict": true,
    "noImplicitAny": true,
    "esModuleInterop": true,
		"noEmitOnError": true,
    "moduleDetection": "force"
  }
}

rootDir를 src로 지정하고 트랜스파일 된 코드는 build에 저장하게끔 설정을 했으니 각각 tsconfig.json과 같은 레벨에 위치한 폴더를 만들어줍니다.

"moduleDetection": "force" 를 통해
변수나 함수명 등 공유하던 식별자들을 선택창에 제한한다.
```

<br>

2. nodemon.json

```json
{
  "watch": ["src"],   // 주시할 폴더
  "ext": ".ts,.js",   // 주시할 확장자
  "ignore": [],       // 예외
  // "exec": "npx ts-node ./src/*.ts"  // 윈도우 에러 발생
  "exec": "npx ts-node ./src/index.ts"  // 명령어
}

파일이 바뀔때마다 수동적으로 파일을 실행하지 않아도 되게 nodemon 이 따를 수 있는 실행 조건을 설정해 줍니다.
```

<br>

3. package.json

```json
"start:dev": "npx nodemon -q"

설정한 파일들을 실행시실 스크립트를 만듭니다. 개인적으로 파일이 재실행 될 때마다 나오는 메세지를

`--quiet`또는 `-q` 라는 flag로 감춰줍니다.
```

<br>

### production

보통 개발환경에서 main/master 병합이나 배포단계 때 하는 절차 설정 방법입니다.  
npm i rimraf --save-dev 노드를 위한 rm -rf (UNIX 명령어)를 설치

1. package.json 설정

```json
"build": "rimraf ./build && tsc",
"start": "npm run build && node build/index.js" // index.js가 아닐수도 있음 참고!
```

<br>

---

<br>

```
강의를 보다보니 bash에서 gs, gaa, gcm, gp 를 통해 깃명령어를 썼다.

gs: git status
gaa: git add .
gcm: git commit -m 'message'
gp: git push

딱 이러한 함수일 것 같다.

bash안에서 함수를 정의할 수 있다.
정의를 해보았고 사용도 해보았다.
그러나 배쉬를 껐다 켰을땐 정의되어있던 함수가 사라진다.

정말 자주 사용하는 깃 명령어이므로 지속적으로 사용이 가능한 함수로 만들고 싶다.

.bash_profile이라는 파일을 수정해야 한다.
cd or cd ~ -git bash 홈 디렉토리로 이동
vi .bash_profile - vi에디터로 파일 수정
함수작성 (alias기능 사용 가능)
source .bash_profile - 시스템 환경변수를 등록한다.
```

<br>

### 열거형 (Enums)

<br>

관련된 상수값들을 집합하여 선언을 하며 TS같은 경우는 숫자와 문자형 기반의 열거형을 지원합니다.  
물론 JS로도 상수값을 선언할 수 있지만 TS의 enum을 사용하면:

1. 상수를 사용할 때 IDE의 코드예측 지원을 받을 수 있습니다
2. 변경범위가 줄어듭니다

<br>

### 1. 숫자형 이넘

<br>

- 값을 지정하지 않으면 기본값은 숫자 0 이고, auto increment.
- 문자형 이넘과는 다르게 Reverse mapping이 가능하다.

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

const myColor: Color = Color.Red;
console.log({ myColor }); // { myColor: 0 }

const yourColor: Color.Blue = Color.Blue;
console.log({ yourColor }); // { yourColor: 2 }

// Reverse mapping
console.log(Color[0]); // Red
console.log(Color[2]); // Blue
```

<br>

### 2. 문자형 이넘

<br>

```typescript
enum Color {
  RED = "RED",
  GREEN = "GREEN",
  BLUE = "BLUE",
}

const myColor: Color = Color.RED;
console.log({ myColor });

const yourColor: Color.BLUE = Color.BLUE;
console.log({ yourColor });

const otherColor: string = Color.GREEN;
console.log({ otherColor });
```

<br>

### Enum 써보기

<br>

```typescript
import Color from './types';

const chorock: Color = Color.GREEN;
console.log(chorock);

// type casting
const colorOfSky: Color.BLUE = Color.GREEN as Color.BLUE;
console.log(colorOfSky);

const faveColor = "LOVE" as Color;
console.log(faveColor);

타입캐스팅은 억지로 타입을 변장시킵니다.
가급적 타입캐스팅을 사용하지 않도록 해야 합니다.
```

<br>

### 인자로 받아보기

<br>

```typescript
import Color from "./types";

function printRGB(color: Color): Color {
  return color;
}

console.log(printRGB(Color.RED)); // RED
console.log(printRGB(Color.GREEN)); // GREEN
console.log(printRGB(Color.BLACK)); // error
```

<br>

### 인터페이스의 타입으로 부여하기

<br>

```typescript
import Color from "./types";

enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// type TTingsInLife = {
//   colorOfPen: Color;
//   keyboardArrow: Direction;
// }

interface IThingsInLife {
  colorOfPen: Color;
  keyboardArrow: Direction;
}

function printThingsInLife(things: IThingsInLife): string {
  return `color of pen: ${things.colorOfPen}, keyboardArror: ${things.keyboardArrow}`;
}

const things = {
  colorOfPen: Color.Blue,
  keyboardArrow: Direction.Up,
};

console.log(printThingsInLife(things));


보통 인터페이스나 타입을 정의할때 식별자 앞에 I 또는 T를 붙인다.
interface - INameOfInterface
type - TNameOfType
```

<br>

### Object.<메소드>랑 함께 사용해보기

<br>

```typescript
import Color from "./types";

const keys = Object.keys(Color);
console.log(keys);

console.log("---------------------------");

const values = Object.values(Color);
console.log(values);

type IObjectType = {
  [key in Color]?: string;
};

const myObject: IObjectType = {};

// values.forEach((key) => {
//   myObject[key] = "hello";
// });

// console.log(myObject);

const keyValues = Object.entries(Color);
keyValues.forEach((key) => {
  myObject[key[1]] = key[0];
});
console.log(myObject);
```

<br>

### Enum과 tree-shaking

<br>

```typescript
Tree-shaking(트리쉐이킹)은 사용하지 않는 코드를 제거하는 기능을 말합니다.

우리가 이번 학습에서 봐 왔던 enum은 TS 자체의 기능이기때문에 tree-shaking이 되지 않습니다 🤯

// index.ts
enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}

// 쓰이지 않는 enum을 트랜스파일 해보면...
// index.js
"use strict";
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));

트리쉐이킹이 전혀 되지 않은채로 JS코드로 트랜스파일이 됩니다.

물론 쓰이지 않는 코드는 지워야겠지만, 우선 더 효율적이고 쓰이더라도 트리쉐이킹이 되는 enum선언 방법을 알아보겠습니다.

// index.ts
const enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

const green = Color.Green;

// index.js
"use strict";
const green = "Green" /* Color.Green */;

앞에 const만 붙였을 뿐인데 쓰여진 부분만 깔끔하게 트랜스파일이 되었습니다. 이런식으로 우리는 JS로 번들되는 코드 양을 줄일 수 있습니다.
```

<br>

### 제네릭 타입

제네릭은 선언 시점이 아닌 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법입니다.

제네릭을 선언할 때 관용적으로 사용되는 대표적인 식별자로 `T`가 있고, 그 외에 `U`와 `V`가 있습니다. 반드시 `T`, `U`, `V`를 사용하여 하는 것은 아니지만 관용적인 식별자를 쓰는게 모범적입니다.

어떻게 보면 어떤 타입을 전달해도 사용이 가능한 `any`랑 다른점이 있을지 고민이 될수도 있지만 `any`는 타입체크를 전혀 하지 않아서 전달받은 데이터의 타입을 알 수 없고 반환할 때 타입의 정보를 반환하지 않습니다. 이런 반면에 제네릭은 전달받은 타입을 확인 및 반환을 할 수 있고 타입을 제한 할 수도 있습니다

<br>

- 객체

```typescript
interface MyInterface {
  value: string | number | string[];
}

// const error: readonly Array<boolean> = [false];          // error
// const okay: readonly boolean[] = [false];                // okay
// const okayGeneric: ReadonlyArray<boolean> = [false];     // oaky

const stringObject: MyInterface = { value: "hello world!" };
const numberObject: MyInterface = { value: 1234 };
const stringArrayObject: MyInterface = { value: ["hello", "world"] };

// 제네릭(generic)을 써야하는 이유는 뭘까? 아래 예문에서 알아보자
interface MyInterfaceG<T = string> {
  value: T;
}

const stringObjectG: MyInterfaceG<string> = { value: "hello world!" };
const numberObjectG: MyInterfaceG<number> = { value: 1234 };
const stringArrayObjectG: MyInterfaceG<string[]> = {
  value: ["hello", "world"],
};
const defaultObjectG: MyInterfaceG = { value: "hellow world!!" };

// const stringArrayObjectG_2: MyInterfaceG<Array<string>> = { value: ["hello", "world"] }; // 지저분해보인다.

// 다른 타입을 쓰고 싶을 때 선언부로 가서 추가해줘야 하는 차이점
// 드러나있는 코드에 명시적으로 타입이 적혀있어서 타입을 알아보기 쉬움
// 기초값(default)를 설정할 수 있다.
```

<br>

- 함수

```typescript
type User = {
  email: string;
  name: string;
};

function getData<T = string>(data: T): T {
  return data;
}

console.log(getData<string>("hello world!"));
console.log(getData("hello world!"));
console.log(getData<number>(1234));
console.log(getData<User>({ email: "email@email.com", name: "katie" }));
console.log(getData<String[]>(["string", "data"]));
console.log(getData<String[]>([]));

console.log();
```

<br>

- 클래스

```typescript

```
