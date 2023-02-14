# 입문주차

<input type="checkbox"> Nest.js가 기존 웹 프레임워크에 비해서 어떤 장점이 있는지 명확하게 이해하고 설명할 수 있다. <br>
<input type="checkbox"> 레이어드 아키텍처 패턴에 대해서 제대로 알고 설명할 수 있다. <br>
<input type="checkbox"> 기본적인 nest 커맨드를 사용하여 구성요소들을 생성할 수 있다. <br>
<input type="checkbox"> IoC와 DI 개념에 대해서 설명할 수 있다. <br>
<input type="checkbox"> 데코레이터에 대해서 설명할 수 있다. <br>
<input type="checkbox"> 간단한 웹 서비스를 Nest.js 기반으로 작성할 수 있다. <br>

<br>
# 들어가며

Express, Koa, Fastify 등 수많은 Node.js 웹 프레임워크들 중 후발대인 Nest.js는 어떻게 가장사랑받는 웹 프레임워크가 될 수 있었을까?  
무엇이 그걸 가능케 만들었을까?

<br>

# Express의 아쉬운 점

Node.js를 배울때 꼭 거치게 되는 단계가 있는데, 
바로 웹서버를 개발하는 단계이다.

이럴때 항상 책, 메뉴얼 에서는 Express가 등장한다.
그만큼 Express의 위상은 대단하다.

그 이유는 Express를 사용하면 몇 줄 안되는 코드로 서버를 열 수 있다.
```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000)  // 3000번 폰트로 WAS 서버 바로 띄우기
```

그러나 이렇게 간단한 웹서버는 실제로 사용하지 않는다.  
필요한 기능들을 하나씩 추가하다보면 점점 무거워지게 된다.

<br>

# Nest.js의 등장
Nest.js는 어떤 특징들을 가지고 있을까?  
Nest.js는 타입스크립트 & 커맨드 기반 웹 프레임워크이다. 이제부터 모든 것을 커맨드로!

예를 들어 레이어드 아키텍처 패턴에 Posts 컨트롤러를 만드려고 한다면 다음과 같은 커맨드를 입력한다.
```bash
nest g co posts
g: generate
co: controller
posts: 파일 이름
```

여기서 Express와 Nest.js의 차이점을 알 수 있습니다.  
Express는 간단하지만 직접 폴더구조를 설계하고, 파일들을 생성해야 합니다.  
반면 Nest.js는 커맨드 명령으로 폴더구조와, 파일들을 간단히 생성할 수 있습니다.  

Express를 사용하여 직접 생성해도 상관없습니다.  
다만 Express를 사용하면 직접 작성하는 만큼 유동적이게 만들 수 있겠지만, 에러도 그만큼 생길 수 있습니다.  

Nest.js는 로직에 의해 생성되기 때문에 정확하게 만들어 냅니다.  

이런 게 지원이 되면 좋은 것이 또 하나가 있습니다.  
바로, 개발자가 비지니스 로직. 즉, **웹 서버의 핵심 로직 구현에만 신경**쓰고 그 외에 다른 부분들은 Nest.js에 일임을 하면 되는 것입니다. 이렇게 되면 뭐가 좋을까요?

- 생각할 거리가 줄어들어 비지니스 로직의 퀄리티가 향상될 가능성이 커집니다!
- 이것저것 직접 손대지 않아도 된다는 얘기는 바꿔 말하면 코드 생산성이 향상된다는 얘기에요!
- 그리고 같은 기능의 웹 서버를 만든다고 해도 조금이라도 일을 덜 하면… 그냥 좋잖아요?!

<br>

# Nest.js 준비

> 터미널 명령어를 실행하는 디렉토리는 Nest.js 루트 디렉토리입니다.  

> 패키지 매니저는 NPM만 사용하며 yarn 및 다른 패키지 매니저는 일절 사용하지 않습니다!
> 그 이유는 npm이 가장 잘 호환이 되기 때문입니다.

> [강의 참조 사이트 1주차 사용코드](https://github.com/mindori/sparta-nest)

<br>

Nest.js 설치하기
```bash
npm install [-g] @nestjs/cli
글로벌 설치는 옵션이다.
```
Nest.js 매뉴얼
```bash
nest
```
Nest.js 프로젝트 생성 명령어
```bash
nest new nestjs
실패시
git clone https://github.com/nestjs/typescript-starter.git sparta-nest
cd sparta-nest
npm i
```

<br>

# Nest.js 코드분석 - main.ts
```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

const app = await NestFactory.create(AppModule);
AppModule이라는 모듈을 루트 모듈로 사용하는 Nest.js 어플리케이션 인스턴스를 생성하는 문장입니다.
```

<br>

# Nest.js 코드분석 - app.module.ts

```typescript
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

데코레이터('@', Decorator)가 등장한다.
```

