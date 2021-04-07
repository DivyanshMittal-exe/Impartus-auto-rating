console.log("Working");

window.onhashchange = function () {
  console.log("#changed", window.location.hash);
  window.onhashchange = function () {
    console.log("Running");
    window.addEventListener("DOMContentLoaded", (event) => {
      console.log("DOM fully loaded and parsed");
    });

    setTimeout(function () {
      var x = document.getElementsByClassName("bot-star float-left");
      x[0].click();
      var y = document.getElementsByClassName("like-dislike-item");
      var z1 = y[0].getElementsByClassName(
        "material-icons thumb_down float-right"
      );
      z1[0].click();
      var z2 = y[1].getElementsByClassName(
        "material-icons thumb_down float-right"
      );
      z2[0].click();
      var z3 = y[2].getElementsByClassName(
        "material-icons thumb_down float-right"
      );
      z3[0].click();
      document.getElementById("vidRatingCancel").click();
    }, 300);
  };
};
