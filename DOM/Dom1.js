// Solo Walkthrough Example
const myDiv = document.getElementById("myDiv");
const paragraphs = document.getElementsByTagName("p");
const myElements = document.getElementById("myClass");
const newButton = document.getElementById("newBtn");

newBtn.addEventListener("click", () => {
   const newElement = document.createElement("p");
   newElement.textContent = "Hello World!";
   myDiv.appendChild(newElement);
});





// const btnClick = document.getElementById("btnClick")
// const main = document.getElementById("main")


// btnClick.addEventListener("click", () => {
//    const newElement = document.createElement("h1")
//    newElement.textContent = "clicked"
//    main.appendChild(newElement)
// })