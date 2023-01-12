function hideResult() {
  document.getElementById("moderate").setAttribute("class", "hidden");
  document.getElementById("liberal").setAttribute("class", "hidden");
  document.getElementById("conservative").setAttribute("class", "hidden");
  // document.getElementById("q2").setAttribute("class", "hidden");
  // document.getElementById("q3").setAttribute("class", "hidden");
  // document.getElementById("q4").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResult();
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();

  if (countYes + countNo <= -1){
    document.getElementById("conservative").removeAttribute("class");
  } else if (countYes + countNo >= 1) {
    document.getElementById("liberal").removeAttribute("class");
  } else if (countYes + countNo == 0)
    document.getElementById("moderate").removeAttribute("class");
  };
}


let buttonYes = document.getElementById("yes");
  countYes = 0;
buttonYes.onclick = function() {
  countYes += 1;
  buttonYes.innerHTML = "Yes:" + countYes;
};

let buttonNo = document.getElementById("no");
  countNo = 0;
buttonNo.addEventListener("click", function() {
  countNo -= 1;
  buttonNo.innerHTML = "NO:" + countNo;
});