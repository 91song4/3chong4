const get = (target) => {
  return document.querySelector(target);
};

// 임시 변수(db에서 전달받아야 하는 값)
// let status = 4;
let confirm = 0;

// if (status === 4) {
//   $user_confirm.style.display = "block";
// }
function test() {
  const $user_confirm = get(".user_confirm");
  const $user_confirm_test = get(".user_confirm_test");
  $user_confirm.style.display = "block";
  $user_confirm_test.style.display = "none";
}

function user_confirm() {
  const $user_confirm = get(".user_confirm");
  const $review_write = get(".review_write");
  confirm = 1;
  $user_confirm.style.display = "none";
  $review_write.style.display = "block";
}

function review_write() {
  setTimeout(
    () => (location.href = "http://localhost:4000/review_write"),
    3000
  );
}

function laundry_add() {
  alert("세탁물을 추가 신청합니다.");
  $.ajax({
    success: function (response) {
      location.href = "http://localhost:4000/laundry_add";
    },
  });
}
