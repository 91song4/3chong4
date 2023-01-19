$(document).ready(function () {
    reviewList();
})

function reviewList() {
    $.ajax({
        type: "GET",
        url: "api/shopReview",
        data: {},
        success: function (response) {
            console.log(response);

            const rows = response.data;
            for (let i in rows) {
                let content = rows[i].content
                let image = rows[i].image
                let shop_name = rows[i].shop_name
                let star_rating = rows[i].star_rating
                let createdAt = rows[i].createdAt
                let nickname = rows[i].user.nickname
                let temp_html = `
                <div class="review_wrap">
        <ul class="review_data_wrap">
          <li class="review_shop_name">${shop_name}</li>
          <li class="review_user_name">${nickname}</li>
          <li class="review_date">${createdAt}</li>
          <li class="review_star_rating">
            <span>평점</span>
            <img
              class="ico-star"
              src="../static/images/star_rating_${star_rating}.svg"
              alt=""
            />
          </li>
        </ul>
        <p class="review_content">${content}</p>
      </div>
       `
                $('#shopReview').append(temp_html);
            };
        }
    });
};