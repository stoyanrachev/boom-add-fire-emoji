import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  //window.addEventListener("load", setAttributePrice);

//function setAttributePrice() {
var fireEmoji= "🔥";
const hotProducts = document.querySelectorAll(".hot");
for (var i = 0; i < hotProducts.length; i++) {
  var price = hotProducts[i].innerHTML;
  hotProducts[i].setHTML(price+fireEmoji);
  
}

//}
});
