function user_register() {
  const nickname = $("#nickname").val();
  const password = $("#password").val();
  const password2 = $("#password2").val();
  const phone_number = $("#phone_number").val();
  const address = $("#address").val();
  console.log(nickname);
  console.log(password);
  if (password !== password2) {
    alert("비밀번호를 다시 확인해 주세요.");
  } else {
    $.ajax({
      type: "POST",
      url: "/api/register",
      data: {
        nickname,
        password,
        phone_number,
        address,
      },
      success: function (response) {
        alert("회원가입 성공!");
        location.href = "http://localhost:4000/";

        // token = response.token;
        // setlogin();
      },
      error: function (error) {
        alert("회원가입 실패");
      },
    });
  }
}

function shop_register() {
  const shop_name = $("#nickname").val();
  const password = $("#password").val();
  const password2 = $("#password2").val();
  const shop_number = $("#phone_number").val();
  const address = $("#address").val();

  if (password !== password2) {
    alert("비밀번호를 다시 확인해 주세요.");
  } else {
    $.ajax({
      type: "POST",
      url: "/api/register_shop",
      data: {
        shop_name,
        password,
        shop_number,
        address,
      },
      success: function (response) {
        alert("회원가입 성공!");
        location.href = "http://localhost:4000";
      },
      error: function (error) {
        alert("회원가입 실패");
      },
    });
  }
}
