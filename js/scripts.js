function hideResult() {
  document.getElementById("moderate").setAttribute("class", "hidden");
  document.getElementById("liberal").setAttribute("class", "hidden");
  document.getElementById("conservative").setAttribute("class", "hidden");
  document.getElementById("q2").setAttribute("class", "hidden");
  document.getElementById("q3").setAttribute("class", "hidden");
  document.getElementById("q4").setAttribute("class", "hidden");
}

window.onload = function() {

  
  hideResult();
  document.querySelector("form").onsubmit = function(event) {

    event.preventDefault();

    document.getElementById("moderate").removeAttribute("class");

  };
}


let buttonYes = document.getElementById("yes");
  countYes = 0;
buttonYes.onclick = function() {
  countYes += 1;
};

let buttonNo = document.getElementById("no");
  countNo = 0;
buttonNo.onclick = function() {
  countNo -= 1;
};