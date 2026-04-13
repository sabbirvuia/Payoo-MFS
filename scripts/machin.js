


function showOnly(id, idbtn){
        // console.log(idbtn)
if (id === "transaction-history"){
    //   window.location.reload();
        const buttons = ["add-money", "get-bonus", "pay-bill", "transfer-money", "cash-out" ]
        const activebtns =[ "add-money-btn","cash-out-btn","transfer-money-btn","get-bonus-btn","pay-bill-btn","transaction-history-btn"]
        
        for(let button of buttons){
             const thisButton = document.getElementById(button);
             thisButton.classList.add("hidden");
            }
        for(let btn of activebtns ){
            const active = document.getElementById(btn);
             active.classList.remove("bg-blue-100");
        }
        const select = document.getElementById(id)
         select.classList.remove("hidden");
         const select1 = document.getElementById(idbtn)
         select1.classList.add("bg-blue-100");
         
    }

else {

    const buttons = ["add-money", "get-bonus", "pay-bill", "transfer-money", "cash-out", "transaction-history" ]
    const activebtns =[ "add-money-btn","cash-out-btn","transfer-money-btn","get-bonus-btn","pay-bill-btn","transaction-history-btn"]
    for(let button of buttons){
         const thisButton = document.getElementById(button);
               thisButton.classList.add("hidden");
       }
       for(let btn of activebtns ){
            const active = document.getElementById(btn);
             active.classList.remove("bg-blue-100");
        }

    const select = document.getElementById(id)
    select.classList.remove("hidden");
        const select1 = document.getElementById(idbtn)
         select1.classList.add("bg-blue-100");
         
    }
}