console.log('Add validation!');
//step 4
let totalDiv = document.querySelector('#total')
    //console.log(totalDiv)
    //totalDiv.textContent = "parking cost"
    let error = document.createElement('p')
    error.textContent = "Fill Out Form Please"
 let container = document.querySelector(".container")
//console.log(container)
container.append(error)

    let form = document.querySelector("#parking-form")
    //console.log(form)
    form.addEventListener('submit', (event) => {
        //console.log("hello")
        event.preventDefault()
    let nameDiv = document.querySelector('#name-field')
    let nameBox = document.querySelector("#name")
     if (nameBox.value.length === 0) {
         let nameError = document.createElement("p")
         nameError.textContent = "Fill Out Your Name"
         nameDiv.append(nameError)
     }
    })
