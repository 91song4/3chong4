# Node.js 로 크롤러 만들기

**puppeteer** 설치

```bahs
  // 크롤링을 도와주는 라이브러리
  npm install puppeteer
```
***
puppeteer 불러오기  
fs module 불러오기

```javascript
const puppeteer = require("puppeteer");
const fs = require("fs");
```
**fs(file system)**
- node.js 에 내장된 모듈이다.
- 파일을 읽고 쓰는것을 도와준다.
***
puppeteer 사용방법

```javascript
  // Launches a browser instance with given arguments and
  // options when specified.
  // 브라우저 열기
  const browser = await puppeteer.launch(options?);
  
  // Promise which resolves to a new Page object.
  // The Page is created in a default browser context.
  // 페이지 열기
  const page = await browser.newPage();

  // 링크 이동
  await page.goto(url, options?);

  // Waits for a function to finish evaluating in the page's context.
  // (Optional) Maximum time to wait in milliseconds.
  // Defaults to 30000 (30 seconds).
  // Pass 0 to disable the timeout.
  // Puppeteer's default timeout can be changed using
  // 함수가 페이지 컨텍스트에서 평가를 완료할 때까지 기다립니다.
  // 옵셔널 파라미터는 timeout 설정을 하지 않으면 기본값인 30초를 기다린다.
  await page.waitForFunction(pageFunction, options?, ...args);

  // The method runs document.querySelectorAll within the page.
  // If no elements match the selector, the return value resolves to [].
  // cards 에 모든 카드정보 배열로 저장
  const cards = await page.$$(selector);
```
