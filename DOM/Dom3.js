// Using your knowledge of HTML, CSS, and JavaScript, create a form that collects the following information from the user: first name, last name, email, and password. HINT, the type for password should make the password look like little dots, not showing the password text. This adds a layer of security to your code. The email and password fields should be marked as required.
// Once the user submits the form, use the DOM to display an <h3> heading that says "Thank you, [first name] [last name]! We will send an email to confirm your account info to [email]." Also, console log the password.


const myDiv = document.getElementById("myDiv");
const fname = document.getElementById("fName");
const lname = document.getElementById("lName").value;
const email = document.getElementById("email");
const password = document.getElementById("Password"); //CASE SENSITIVE ID FROM HTML
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
   e.preventDefault();
   const newElement = document.createElement("h3");
   newElement.textContent = `Thank you, ${fname.value} ${lname}! We will send an email to confirm your account info to ${email.value}`;
   //Fix the above
   myDiv.appendChild(newElement);
   console.log(`${password.value}`);
});
