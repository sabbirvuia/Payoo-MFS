//  window.location.assign("./home.html")
document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.replace("./index.html");
});

function generateTrxId() {
  return Math.floor(10000000 + Math.random() * 90000000);
}

// all ......
