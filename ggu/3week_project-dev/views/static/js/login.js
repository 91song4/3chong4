let token;

function login_user() {
  const nickname = $("#nickname").val();
  const password = $("#password").val();

    if (!nickname || !password) {
        alert("닉네임 또는 비밀번호가 입력되지 않았습니다.")
    } else {
        $.ajax({
            type: 'POST',
            url: '/api/auth',
            data: {
              nickname, password
            },
            success: function (response) {
                alert(`로그인 성공, 환영합니다 ${nickname}님`)
                token = response.token;
                console.log(token);
                setloginuser();
            }, error: function (error) {
                alert("로그인 실패..............")
                console.log("에러이유:", error);
                    },
                })
            }
    }

function setloginuser() {
  if (token) {
    // console.log(token);
    $.ajax({
      type: "get",
      url: "api/auth/me",
      data: {},
      success: function (response) {
        let user_data = response.user;
        // console.log(user_data);
        location.href = "http://localhost:4000/mypage";
      },
    });
  }
}

function login_shop() {
    const shop_name = $('#nickname').val();
    const password = $('#password').val();

    if (!nickname || !password) {
        alert("닉네임 또는 비밀번호가 입력되지 않았습니다.")
    } else {

        $.ajax({
            type: 'POST',
            url: '/api/auth_shop',
            data: {
              shop_name, password
            },
            success: function (response) {
                alert(`로그인 성공, 환영합니다 ${shop_name}님`)
                token = response.token;
                setloginshop();
            }, error: function (error) {
                alert("로그인 실패..............")
                    },
                })
            }
    }
function setloginshop() {
  if (token) {
    // console.log(token);
    $.ajax({
      type: "get",
      url: "api/auth_shop/me",
      data: {},
      success: function (response) {
        let user_data = response.user;
        // console.log("샵스테이터스:", user_data.shop_status);
        if (user_data.shop_status === 0) {
          location.href = "http://localhost:4000/shop_wash_list";
        } else if (user_data.shop_status === 1) {
          location.href = "http://localhost:4000/shop_wash_status";
        } else {
          alert("알 수 없는 에러가 발생하였습니다..");
        }
      },
    });
  }
}

function register() {
  location.href = "http://localhost:4000/register";
}
