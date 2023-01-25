# TypeScript 환경설정

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
		"noEmitOnError": true
  }
}

rootDir를 src로 지정하고 트랜스파일 된 코드는 build에 저장하게끔 설정을 했으니 각각 tsconfig.json과 같은 레벨에 위치한 폴더를 만들어줍니다.
```

<br>

2. nodemon.json

```json
{
  "watch": ["src"],   // 주시할 폴더
  "ext": ".ts,.js",   // 주시할 확장자
  "ignore": [],       // 예외
  "exec": "npx ts-node ./src/*.ts"  // 명령어
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

## production
보통 개발환경에서 main/master 병합이나 배포단계 때 하는 절차 설정 방법입니다.  
npm i rimraf --save-dev 노드를 위한 rm -rf (UNIX 명령어)를 설치

1. package.json 설정

```json
"build": "rimraf ./build && tsc",
"start": "npm run build && node build/index.js" // index.js가 아닐수도 있음 참고!
```

<br>

***

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