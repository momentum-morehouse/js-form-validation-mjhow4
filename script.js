// console.log('Add validation!');
// //step 4
// let totalDiv = document.querySelector('#total')
//     //console.log(totalDiv)
//     //totalDiv.textContent = "parking cost"
//     let error = document.createElement('p')
//     error.textContent = "Fill Out Form Please"
//  let container = document.querySelector(".container")
// //console.log(container)
// container.append(error)

//     let form = document.querySelector("#parking-form")
//     //console.log(form)
//     form.addEventListener('submit', (event) => {
//         //console.log("hello")
//         event.preventDefault()
//     let nameDiv = document.querySelector('#name-field')
//     let nameBox = document.querySelector("#name")
//      if (nameBox.value.length === 0) {
//          let nameError = document.createElement("p")
//          nameError.textContent = "Fill Out Your Name"
//          nameDiv.append(nameError)
//      }
//     })

//step 3    
form = document.querySelector("#parking-form")
    //console.log(form)
    form.addEventListener('submit', function(event) {
        //console.log("hello")
        event.preventDefault()
    let cvvDiv = document.querySelector('#cvv-field')
    let cvvBox = document.querySelector("#cvv")
     if (cvvBox.value.length !== 3)  {
         let cvvError = document.createElement("p")
         cvvError.textContent = "CVV must be 3 digits"
         cvvDiv.append(cvvError)
         //can't figure out why it prints twice on one submit
     }
     // step 4 complete
     // step 5 incomplete
     //cant get getDay() to work in this function.
     totalDiv = document.querySelector('#total')
     numberOfDays = document.querySelector('#days') 
     let startDay = document.querySelector('#start-date')
     let x = startDay.value 
     console.log(x)
     
     //console.log(numberofDays)
     numDays = numberOfDays.value
     //console.log(totalDiv)
     totalDiv.textContent = "Total Parking Cost: $" + (numDays * 5)
     
     //part of step 6
    let creditDiv = document.querySelector('#credit-card-field')
    let creditBox = document.querySelector("#credit-card")
    let cc = creditBox.value
    console.log(cc)
    if (creditBox.value.length !== 16)  {
    let creditError = document.createElement("p")
         creditError.textContent = "Credit Card must be 16 digits"
         creditDiv.append(creditError)
     }

    //these formulas did not work for me
    // function validateCardNumber(number) {
    //     var regex = new RegExp("^[0-9]{16}$");
    //     if (!regex.test(number))
    //         return false;
    
    //     return luhnCheck(number);
    // }
    
    // function luhnCheck(val) {
    //     var sum = 0;
    //     for (var i = 0; i < val.length; i++) {
    //         var intVal = parseInt(val.substr(i, 1));
    //         if (i % 2 == 0) {
    //             intVal *= 2;
    //             if (intVal > 9) {
    //                 intVal = 1 + (intVal % 10);
    //             }
    //         }
    //         sum += intVal;
    //     }
    //     return (sum % 10) == 0;
    
    // } 
    // validateCardNumber(cc);
    // luhnCheck(cc);
    })

   
   
