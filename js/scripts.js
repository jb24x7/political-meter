
// let yesclick = document.querySelector(".yes");
// let countyes = 0;

// yesclick.addEventListener("click", function() {
//   countyes += 1;
//   console.log(countyes);
// });

// const noclick = -1;

// function hideResult() {
//   document.getElementById("message1").setAttribute("class", "hidden");
//   document.getElementById("message2").setAttribute("class", "hidden");
//   document.getElementById("message3").setAttribute("class", "hidden");
// }

// window.onload = function() {

  
//   hideResult();
//   document.querySelector("form").onsubmit = function(event) {

//     event.preventDefault();

//     document.getElementById("message1").removeAttribute("class");

//   };
// }

let buttonHome = document.getElementsByClassName("button-home");
let CountButtonHomeClicks = 0;

buttonHome.addEventListener("click", function() {
  CountButtonHomeClicks += 1;
  console.log(CountButtonHomeClicks);
});