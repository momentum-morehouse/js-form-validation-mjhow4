
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
     // step 4 complete
     // step 5 incomplete
     //cant get getDay() to work in this function.
     totalDiv = document.querySelector('#total')
     numberOfDays = document.querySelector('#days')
     console.log(numberOfDays.value)
     numberOfDays = document.querySelector('#days') 
     let startDay = document.querySelector('#start-date')
     let x = startDay.value + " 07:00:00 -0400"
     console.log(x)
     let date = new Date(x)
     day = date.getDay()
     console.log(day)
     
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
    })
