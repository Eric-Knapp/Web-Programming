$(function () {
  var $show = $("#show");
  var $showList = $("#showList");
  var $search_item = $("#search_item");

  // checking img
  function isValid(val, type) {
    if (type == "img") {
      if (val == null) {
        return "/public/no_image_available.jpeg";
      } else {
        return val.medium;
      }
    }
    if (val == null) {
      return "N/A";
    }
    if (typeof val === "string") {
      if (val.trim() === "") {
        return "N/A";
      }
    }
    if (!val) {
      return "N/A";
    }

    if (type == "reg") return val;
    else if (type == "average") return isValid(val.average, "reg");
    else if (type == "name") return isValid(val.name, "reg");
  }

  function ClickLink(url) {
    $.ajax({
      type: "GET",
      url: url,
      success: function (shows) {
        $show.html(
          `<h1>` +
            isValid(shows.name, "reg") +
            `</h1>` +
            `<img src="` +
            isValid(shows.image, "img") +
            `"/>` +
            `<dl>
                    <dt>Language:</dt>` +
            `<dd>` +
            isValid(shows.language, "reg") +
            `</dd>
                    <dt>Genres:</dt>` +
            `<ul>` +
            isValid(shows.genres, "reg") +
            `</ul>
                    <dt>Average Rating:</dt>` +
            `<dd>` +
            isValid(shows.rating, "average") +
            `</dd>
                    <dt>Network:</dt>` +
            `<dd>` +
            isValid(shows.network, "name") +
            `</dd>
                    <dt>Summary:</dt>` +
            `<dd>` +
            isValid(shows.summary, "reg") +
            `</dd>
                  </dl>`
        );
      },
    });
  }

  $.ajax({
    type: "GET",
    url: "http://api.tvmaze.com/shows",
    success: function (shows) {
      $showList.hide();
      $show.hide();
      $("#homeLink").hide();
      $.each(shows, function (i, show) {
        $showList.append(
          `<li>
          <a class="link" href='${show._links.self.href}'>${show.name}</a>
          </li>`
        );
      });
      $showList.show();

      $("a.link").on("click", function (event) {
        event.preventDefault();
        $showList.hide();
        ClickLink(event.target.href);
        $show.show();
        $("#homeLink").show();
      });
    },
  });

  $("#searchForm").submit((event) => {
    event.preventDefault();
    if ($search_item.val().trim() === "") {
      alert("input invalid");
    } else {
      var requestConfig = {
        type: "GET",
        url: "http://api.tvmaze.com/search/shows?q=" + $search_item.val(),
      };

      $.ajax(requestConfig).then((responseMessage) => {
        $showList.hide();
        $showList.empty();
        $("#homeLink").hide();
        $show.hide();
        $.each(responseMessage, function (i, show) {
          $showList.append(
            `<li>
            <a class="link" href='${show.show._links.self.href}'>${show.show.name}</a>
            </li>`
          );
        });
        $showList.show();
        $("#homeLink").show();

        $("a.link").on("click", function (event) {
          event.preventDefault();
          $showList.hide();
          $("#homeLink").hide();
          ClickLink(event.target.href);
          $show.show();
          $("#homeLink").show();
        });
      });
    }
  });
});
