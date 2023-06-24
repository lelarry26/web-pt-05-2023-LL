// const testArr = [{'position': 0}, {'position': 1}, {'position': 2}]
// const main = document.getElementById("main")

// testArr.map((item) =>{
//    main.innerText +=`${item.position}`
// })


//HW: Change or add to text content of all labels to all say hi using querySelectorAll. 
//Because it is node, we need to look up how to turn it into an array (... in front of document.querySelectorAll which is a node)
const label = document.querySelectorAll('label')
console.log(label)