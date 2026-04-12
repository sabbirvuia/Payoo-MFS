// console.log("Login function loading")


document.getElementById("login-btn")
    .addEventListener('click', function(){
        console.log('login button click')
        
      const numberInput = document.getElementById("input-number");
      const contactNumber = numberInput.value;

      // console.log(contactNumber);

      const pinInput = document.getElementById("input-pin");
      const pinValue = pinInput.value;

      // console.log(pinValue)

      if(contactNumber === "0134567890" && pinValue === "1122"){
        // alert("login Succesfully")

            const dialog = document.getElementById("loginDialog");
            dialog.showModal(); // show dialog

            setTimeout(() => {
              dialog.close();
              window.location.href = "./home.html";
              }, 1000); // 2 seconds loading
        }
   else {
    alert("Invalid phone number or PIN");
            return;
   }
    })


