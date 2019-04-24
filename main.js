// Define event listener for the button to alert a message

let alertButton = document.getElementById("alert-button")
let unicornImage = document.getElementById("unicorn-image")

let alertCallbackFunction = () => {
  unicornImage.classList.add("hide")
}

alertButton.addEventListener("click", alertCallbackFunction)

// Have a simple form, and console.log as they input

let characterInputField = document.getElementById("character")

let inputChangeCallbackFunction = (event) => {
  console.log(event.target.value)
}

characterInputField.addEventListener("change", inputChangeCallbackFunction)








//
