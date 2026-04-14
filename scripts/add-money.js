
// add-money function

document
  .getElementById("add-money-action")
  .addEventListener("click", function () {
    const bankSelectValue = document.querySelector(".bank-select").value;

    let mainBalance = document.getElementById("balance-show").innerText;

    const bankAcNumberValue = document.querySelector(".bank-ac-number").value;

    let addMoneyValue = document.querySelector(".add-money-amount").value;
    let pinValue = document.querySelector(".input-pin").value;

    const date = new Date();
    const trxId = generateTrxId();

    if (bankSelectValue === "Select Bank") {
      alert("⚠️ Select A Bank Please");
    } else if (bankAcNumberValue === "") {
      alert("⚠️ Add Bank Account Number");
    } else if (addMoneyValue === "") {
      alert(⚠️"add Amount ");
    } else if (pinValue === "1122") {
      
  

      let newBalance = Number(mainBalance) + Number(addMoneyValue);

      document.getElementById("balance-show").innerText = `${newBalance}`;

      alert(`✅ Transaction Successful
TRX ID: ${trxId}
Amount Added: $${addMoneyValue}
From A/C: ${bankAcNumberValue}
Available Balance: $${newBalance}
Date & Time: ${date.toLocaleString("en-GB")}
Thank you for banking with us.
`);
      // history content get from DOM
      const historyContent = document.getElementById("history");

      // create element added clss, innerHTML, appendChild
      const div = document.createElement("div");

      div.classList =
        "rounded-xl p-4 flex gap-3 items-center shadow-md bg-base-100";
      div.innerHTML = `
                <div class="bg-slate-200 rounded-full p-2">
                    <img width="60px" src="./assets/opt-6.png" alt="">
                </div>
                <div>
                    <p>TRX:${trxId} | Added $${addMoneyValue} | A/C:${bankAcNumberValue} | Bal:$${newBalance} | ${date.toLocaleString("en-GB")}</p>
                </div>
                `;
      historyContent.appendChild(div);

      document.querySelector(".add-money-amount").value ="";
      document.querySelector(".input-pin").value ="";

    } else {
      alert("❌ Pin Wrong!");
    }
  });

//
