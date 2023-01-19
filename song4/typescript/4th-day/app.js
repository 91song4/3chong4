// 크롤링을 위한 puppeteer
const puppeteer = require("puppeteer");
// 데이터 저장을 위한 fs
const fs = require("fs");

async function scrape() {
  try {
    // 크로미움으로 브라우저를 연다.
    const browser = await puppeteer.launch();

    // 페이지 열기
    const page = await browser.newPage();

    // 링크 이동
    await page.goto("http://127.0.0.1:5500");

    // .card 엘리먼트중에 값이 #100인 .card--id 엘리먼트가 생길때까지 기다림
    await page.waitForFunction(
      () => {
       return document.querySelector('.card:last-child .card--id').textContent === "#100" // true일 때까지 기다린다.
      },
      { timeout: 5000 }   // 위의(19번 행) 화살표함수의 대기시간을 5초로 설정한다. timeout을 설정하지 않으면 최장 30초를 기다린다.
    );

    // cards 에 모든 카드정보 배열로 저장
    const cards = await page.$$(".card"); //page.$$ === .querySelectorAll(selector);
    // 100개의 카드가 잘 저장되었는지 확인.
    console.log(cards.length);
    const data = [];
    // const data = cards.map(async (card) => {
    //   const id = await card.$eval(".card--id", (el) => el.textContent);
    //   const image = await card.$eval(".card--imgae", (el) => el.getAttribute("src"));
    //   const name = await card.$eval(".card--name", (el) => el.textContent);
    //   const details = await card.$eval(".card--details", (el) => el.textContent);
    //   return { id, image, name, details };
    // })

    for (const card of cards) {
      const id = await card.$eval(".card--id", (el) => el.textContent);
      const image = await card.$eval(".card--image", (el) => el.getAttribute("src"));
      const name = await card.$eval(".card--name", (el) => el.textContent);
      const details = await card.$eval(".card--details", (el) => el.textContent);
      data.push({ id, image, name, details });
    }

    // 페이지와 브라우저 종료
    await page.close();
    await browser.close();

    // 리턴한 데이터를 파일로 사용
    return data;
  } catch (err) {
    console.error(err);
  }
}

scrape()
  .then((data) => {
    fs.writeFile("pokemon.json", JSON.stringify(data), "utf8", (err) => {
      if (err) {
        console.log("파일 생성 중 에러 발생.");
        return console.log(err);
      }
      console.log("파일 생성 완료!")
    })
  })
  .catch((err) => console.log(err));