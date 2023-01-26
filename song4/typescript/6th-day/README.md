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

console.log(printRGB(Color.RED));     // RED
console.log(printRGB(Color.GREEN));   // GREEN
console.log(printRGB(Color.BLACK));   // error
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
