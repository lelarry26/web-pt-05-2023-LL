const btnClick = document.getElementById("btnClick")
const main = document.getElementById("main")


btnClick.addEventListener("click", () => {
   // main.innerHTML = `<p>clicked</p>`
   const newElement = document.createElement("h1")
   newElement.textContent = "clicked"
   main.appendChild(newElement)
})