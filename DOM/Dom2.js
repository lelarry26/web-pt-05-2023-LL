const myForm = document.getElementById("myForm")

myForm.addEventListener("submit", function myFunc(something){
   something.preventDefault()
   let firstName = document.getElementById("fName")//.value
   console.log(firstName.value)
})
//line5 .value prints the same as line6 console.log(firstName) without .value
