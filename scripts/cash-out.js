//cash out section 

document.getElementById("withdraw-btn")
.addEventListener("click", function(){
    const inputNumberValue = document.getElementById("input-number").value
    let cashOutAmout = document.querySelector(".cash-out-amout").value
    const pinValue = document.querySelector(".input-pin-co").value
    let mainBalance = document.getElementById("balance-show").innerText;

     const date = new Date();
    const trxId = generateTrxId();

    if (inputNumberValue === "") {
        alert("⚠️ Add Agent Number");
    } else if (cashOutAmout === "") {
      alert("⚠️ add Cash Out Amount ");
    }
    else if (pinValue === "1122") {
     if (cashOutAmout > mainBalance){
        alert("❌ Insufficient Balance")}
        let newBalance = Number(mainBalance) - Number(cashOutAmout);

      document.getElementById("balance-show").innerText = `${newBalance}`;


      alert(`✅ Transaction Successful
TRX ID: ${trxId}
Amount Withdrawl: $${cashOutAmout}
Agent Number: ${inputNumberValue}
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
                    <p>TRX:${trxId} | CashOut  $${cashOutAmout} | Agent Num:${inputNumberValue} | Bal:$${newBalance} | ${date.toLocaleString("en-GB")}</p>
                </div>
                `;
      historyContent.appendChild(div);

      document.querySelector(".cash-out-amout").value ="";
      document.querySelector(".input-pin").value ="";
    }else {
      alert("❌ Pin Wrong!");
    }
      
})