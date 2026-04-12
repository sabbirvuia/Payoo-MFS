


function showOnly(id){

if (id === "transaction-history"){
    //   window.location.reload();
        const buttons = ["add-money", "get-bonus", "pay-bill", "transfer-money", "cash-out" ]

        for(let button of buttons){
             const thisButton = document.getElementById(button);
             thisButton.classList.add("hidden");
            }

        const select = document.getElementById(id)
         select.classList.remove("hidden");
    }

else {

    const buttons = ["add-money", "get-bonus", "pay-bill", "transfer-money", "cash-out", "transaction-history" ]

    for(let button of buttons){
         const thisButton = document.getElementById(button);
               thisButton.classList.add("hidden");
       }

    const select = document.getElementById(id)
    select.classList.remove("hidden");

    }
}