let coupons = {
  SABBIR20: false,
  SAVE20: false,
  PAYOO20: false,
  BONUS20: false
};

document.getElementById("redeem-btn")
     .addEventListener("click", function (){
        const getCouponCode = document
  .getElementById("input-coupon")
  .value
  .toUpperCase();

let mainBalance = document.getElementById("balance-show").innerText;

if (getCouponCode === "") {
  alert("Add Coupon Code");
} 
else if (!coupons.hasOwnProperty(getCouponCode)) {
  alert("❌ Coupon Code Wrong!");
  document.getElementById("input-coupon").value = "";
} 
else if (coupons[getCouponCode]) {
  alert("⚠️ Coupon already used");
  document.getElementById("input-coupon").value = "";
} 
else {
  let newBalance = Number(mainBalance) + 20;
  const date = new Date();

  document.getElementById("balance-show").innerText = `${newBalance}`;

  alert(`✅ Coupon Redeem Successful
Amount Added: $20
Available Balance: $${newBalance}
Date & Time: ${date.toLocaleString("en-GB")}
`);

  // mark this specific coupon as used
  coupons[getCouponCode] = true;

  // history
  const historyContent = document.getElementById("history");
  const div = document.createElement("div");

  div.className =
    "rounded-xl p-4 flex gap-3 items-center shadow-md bg-base-100";

  div.innerHTML = `
    <div class="bg-slate-200 rounded-full p-2">
      <img width="60px" src="./assets/opt-6.png" alt="">
    </div>
    <div>
      <p>Coupon: ${getCouponCode} | Added $20 | Bal:$${newBalance} | ${date.toLocaleString("en-GB")}</p>
    </div>
  `;

  historyContent.appendChild(div);

  document.getElementById("input-coupon").value = "";
}
     })