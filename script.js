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
     // step 4
     totalDiv = document.querySelector('#total')
     numberOfDays = document.querySelector('#days')
     console.log(numberOfDays.value)
     numDays = numberOfDays.value
     //console.log(totalDiv)
     totalDiv.textContent = "Total Parking Cost: $" + (numDays * 5)
 
    })

   
