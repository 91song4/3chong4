const get = (target) => {
  return document.querySelector(target);
};
const getAll = (target) => {
  return document.querySelectorAll(target);
};
// 임시 변수(db에서 전달받아야 하는 값)
let status = 0;
let shop_status = 0;

// shop_wash_list.ejs 세탁 진행하기
function shop_wash_start() {
  // mypage.ejs 에서 받아온 값
  const $status_0 = get(".status_0");
  const $status_1 = get(".status_1");
  // $status_1.style.color = "#33c1bd";
  // $status_0.style.color = "#616a71";
  console.log($status_0); // null 나옴

  console.log(status);
  console.log(shop_status);
  shop_status++;
  status++;
  console.log(status);
  console.log(shop_status);
  setTimeout(
    () => (location.href = "http://localhost:4000/shop_wash_status"),
    3000
  );
}

// shop_wash_status.ejs 진행상황 업데이트
function status_update() {
  if (status === 0 || shop_status === 0) {
    status = 1;
    shop_status = 1;
  }
  console.log(status);
  console.log(shop_status);
  // shop_wash_status.ejs 에서 받아온 값
  const $status_1 = get(".status_1");
  const $status_2 = get(".status_2");
  const $status_3 = get(".status_3");
  const $status_4 = get(".status_4");

  if (status == 1) {
    $status_2.style.color = "#33c1bd";
    $status_1.style.color = "#616a71";
    status++;
  } else if (status == 2) {
    $status_3.style.color = "#33c1bd";
    $status_2.style.color = "#616a71";
    status++;
  } else if (status == 3) {
    $status_4.style.color = "#33c1bd";
    $status_3.style.color = "#616a71";
    status++;
  } else if (status === 4) {
    shop_status = 0;
    console.log(status);
    console.log(shop_status);
    location.href = "http://localhost:4000/shop_wash_list";
  }
}
