$(document).ready(function () {
  washList();
});

function washList() {
  $.ajax({
    type: "GET",
    url: "api/wash_list",
    data: {},
    success: function (response) {
      const rows = response.data;
      for (let i in rows) {
        let extra = rows[i].extra;
        let image = rows[i].image;
        let wash_id = rows[i].wash_id;
        // let status = rows[i].status;
        // status = 1;
        let temp_html = `
            <div class="wash_list">
            <img
              src="https://experiencelife.lifetime.life/wp-content/uploads/2022/06/ja22-we-sweat-clothes-smell-worse-than-others.jpg"
              alt=""
            />
            <div class="wash_list_bottom">
            <input type="hidden" class="wash_id" value="${wash_id} />
            <p class="extra">
            ${extra}
            </p>
              <input
              class="wash_btn"
              type="button"
              name="wash_start"
              value="세탁 진행하기"
              />
            </div>
            </div>
            `;
        $("#washListId").append(temp_html);
      }
    },
  });
}
{
}

{
  /* <p class="wash_id">${wash_id}</p> */
}
const body = document.querySelector("body");
body.addEventListener("click", function (e) {
  if (e.target.classList[0] != "wash_btn") return;
  const wash_id = e.target.parentElement.children[0].value;
  const status = 0;
  $.ajax({
    type: "PUT",
    url: "/api/wash_list",
    data: { wash_id, status }, // = > controller(req.body)
    success: function (response) {
      alert("세탁물 선택이 완료되었습니다!");
      location.href = "http://localhost:4000/shop_wash_status";

      // < = controller return
      // const message = response.data.message;
    },
    error: function (error) {
      alert("잘못된 접근입니다.");
      console.log(error);
    },
  });
});

//

// const wash_btn = document.querySelectorAll(".wash_btn");
// wash_btn.forEach((btn) => {
//   btn.addEventListner("click", function (e) {
//     debugger;
//     let wash_id = $(".wash_id").val();
//     let status = 0;
//     console.log("status = ", status), console.log("wash_id = ", wash_id);

//     $.ajax({
//       type: "PUT",
//       url: "/api/wash_list",
//       data: { wash_id, status },
//       success: function (response) {
//         // const rows = response.data;
//         // let user_data = response.user;
//         // let shop_status = user_data.shop_status;
//         // shop_status = 1;
//       },
//     });
//   });
// });
// wash_btn.addEventListner("click", function (e) {
//   debugger;
//   let wash_id = $(".wash_id").val();
//   let status = 0;
//   console.log("status = ", status), console.log("wash_id = ", wash_id);

//   $.ajax({
//     type: "PUT",
//     url: "/api/wash_list",
//     data: { wash_id, status },
//     success: function (response) {
//       // const rows = response.data;
//       // let user_data = response.user;
//       // let shop_status = user_data.shop_status;
//       // shop_status = 1;
//     },
//   });
// });
// function shop_wash_start(e) {
//   // let shop_id = $("#shop_id").val();
//   debugger;
//   let wash_id = $(".wash_id").val();
//   let status = 0;
//   console.log("status = ", status), console.log("wash_id = ", wash_id);

//   $.ajax({
//     type: "PUT",
//     url: "/api/wash_list",
//     data: { wash_id, status },
//     success: function (response) {
//       // const rows = response.data;
//       // let user_data = response.user;
//       // let shop_status = user_data.shop_status;
//       // shop_status = 1;
//     },
//   });
// }
// $.ajax({ fu
//     type: "GET",
//     url: `/users`,
//     data: {},
//     success: function (response) {
//         const rows = response["users"];
//         let name = rows['user_name']
//         let email = rows["user_email"]
//         let disc = rows["user_disc"]
//         let img = rows["user_image"]
//         let imgsrc = "../static/img/" + img
//         let temp_html =
//         }
// })
// })
